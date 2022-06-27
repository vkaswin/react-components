import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Draggable.scss";
import { classNames } from "utils";

export const Draggable = ({ children, center, zIndex, className }) => {
  let dragRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    dragRef.current.style.cssText += `left: 50%; top: 50%; transform: translate(-50%,-50%)`;
  };

  const handlePointerUp = (e) => {
    const { pointerId } = e;
    dragRef.current.releasePointerCapture(pointerId);
    dragRef.current.removeEventListener("pointermove", handlePointerMove);
    dragRef.current.removeEventListener("pointerup", handlePointerUp);
    delete dragRef.current.offset;
  };

  const handlePointerMove = (e) => {
    const {
      clientX,
      clientY,
      target: { clientWidth, clientHeight },
    } = e;
    const { innerWidth, innerHeight } = window;
    const offsetX = dragRef.current.offset.left;
    const offsetY = dragRef.current.offset.top;

    dragRef.current.style.cssText += `left: ${Math.max(
      0,
      Math.min(innerWidth - clientWidth, clientX - offsetX)
    )}px; top: ${Math.max(
      0,
      Math.min(innerHeight - clientHeight, clientY - offsetY)
    )}px; transform: translate(0px,0px)`;
  };

  const handlePointerDown = (e) => {
    const { pointerId, clientX, clientY, target } = e;
    const { x, y } = target.getBoundingClientRect();
    const left = clientX - x;
    const top = clientY - y;
    dragRef.current.offset = { left, top };
    dragRef.current.setPointerCapture(pointerId);
    dragRef.current.addEventListener("pointermove", handlePointerMove);
    dragRef.current.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <div
      ref={dragRef}
      className={classNames("rc-draggable", { center, className })}
      onPointerDown={handlePointerDown}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};

Draggable.defaultProps = {
  zIndex: 2000,
  center: true,
  className: null,
};

Draggable.propType = {
  top: PropTypes.number,
  center: PropTypes.bool,
  className: PropTypes.string,
};
