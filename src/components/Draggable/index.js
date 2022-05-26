import React, { useEffect, useRef, useState } from "react";

import "./Draggable.scss";

export const Draggable = ({
  children,
  top = "50%",
  left = "50%",
  transform = "translate(-50%,-50%)",
}) => {
  let dragRef = useRef();

  let [position, setPosition] = useState({ offsetLeft: 0, offsetTop: 0 });

  let [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsDesktop(!isMobile);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.addEventListener("touchend", handleMouseUp);
      document.addEventListener("touchmove", handleMouseMove);
    }
  }, [position]);

  const handleMouseDown = ({
    target,
    nativeEvent: { offsetX, offsetY },
    touches: [touch] = [],
  } = {}) => {
    if (isDesktop) {
      setPosition({ ...position, offsetLeft: offsetX, offsetTop: offsetY });
    } else {
      let { left, top } = target.getBoundingClientRect();
      let { clientX, clientY } = touch;
      setPosition({
        ...position,
        offsetLeft: Math.round(clientX) - left,
        offsetTop: Math.round(clientY - top),
      });
    }
  };

  const handleMouseUp = () => {
    if (isDesktop) {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
    }
  };

  const handleMouseMove = ({ x, y, touches: [touch] = [] } = {}) => {
    let { offsetLeft, offsetTop } = position;
    if (isDesktop) {
      if (
        x - offsetLeft < window.innerWidth - 200 &&
        y - offsetTop < window.innerHeight - 200 &&
        x - offsetLeft > 0 &&
        y - offsetTop > 0
      ) {
        dragRef.current.style.left = `${x - offsetLeft}px`;
        dragRef.current.style.top = `${y - offsetTop}px`;
        dragRef.current.style.transform = "translate(0px,0px)";
      }
    } else {
      let { clientX, clientY } = touch;
      if (
        clientX - offsetLeft < window.innerWidth - 200 &&
        clientY - offsetTop < window.innerHeight - 200 &&
        clientX - offsetLeft > 0 &&
        clientY - offsetTop > 0
      ) {
        dragRef.current.style.left = `${clientX - offsetLeft}px`;
        dragRef.current.style.top = `${clientY - offsetTop}px`;
        dragRef.current.style.transform = "translate(0px,0px)";
      }
    }
  };

  if (isDesktop === null) return null;

  return (
    <div
      ref={dragRef}
      className="rc-draggable"
      onMouseDown={isDesktop ? handleMouseDown : null}
      onTouchStart={isDesktop ? null : handleMouseDown}
      style={{ top, left, transform }}
    >
      {children}
    </div>
  );
};
