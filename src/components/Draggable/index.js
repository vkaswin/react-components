import React, { useEffect, useRef } from "react";
import { Portal } from "components";
import PropTypes from "prop-types";
import { classNames } from "utils";

import "./Draggable.scss";

export const Draggable = ({ children, center, zIndex, className }) => {
  const dragRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    dragRef.current.setAttribute(
      "style",
      `left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: ${zIndex}`
    );
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
    const left = Math.max(
      0,
      Math.min(innerWidth - clientWidth, clientX - offsetX)
    );
    const top = Math.max(
      0,
      Math.min(innerHeight - clientHeight, clientY - offsetY)
    );

    dragRef.current.setAttribute(
      "style",
      `left:${left}px; top: ${top}px; transform: translate(0px,0px); z-index: ${zIndex}`
    );
  };

  const handlePointerDown = (e) => {
    const { pointerId, clientX, clientY, target } = e;
    const { x, y } = target.getBoundingClientRect();
    const left = clientX - x;
    const top = clientY - y;
    dragRef.current.offset = { left, top };
    dragRef.current.setPointerCapture(pointerId);
    dragRef.current.addEventListener("pointermove", handlePointerMove);
    dragRef.current.addEventListener(
      "pointerup",
      (e) => {
        delete dragRef.current.offset;
        const { pointerId } = e;
        dragRef.current.releasePointerCapture(pointerId);
        dragRef.current.removeEventListener("pointermove", handlePointerMove);
      },
      {
        once: true,
      }
    );
  };

  return (
    <Portal>
      <div
        ref={dragRef}
        className={classNames("rc-draggable", { center, className })}
        onPointerDown={handlePointerDown}
        style={{ zIndex }}
      >
        {children}
      </div>
    </Portal>
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
