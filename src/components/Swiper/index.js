import React, { Fragment, useEffect, useRef, useState } from "react";
import { classNames } from "utils";
import PropTypes from "prop-types";

import "./Swiper.scss";

export const Swiper = ({ children }) => {
  const swiperRef = useRef();

  const [left, setLeft] = useState(0);

  const handlePointerUp = (e) => {
    const { pointerId } = e;
    swiperRef.current.releasePointerCapture(pointerId);
    swiperRef.current.removeEventListener("pointermove", handlePointerMove);
    swiperRef.current.removeEventListener("pointerup", handlePointerUp);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    swiperRef.current.style.setProperty("transform", `translateX(-${left}px)`);
  }, [left]);

  const handleResize = () => {
    const { scrollWidth, clientWidth } = swiperRef.current;
    setLeft(Math.max(0, Math.min(scrollWidth - clientWidth, left)));
  };

  const handlePointerMove = (e) => {
    const { clientX } = e;
    const { scrollWidth, clientWidth } = swiperRef.current;
    const left = swiperRef.current.left - clientX;
    setLeft(Math.max(0, Math.min(scrollWidth - clientWidth, left)));
  };

  const handlePointerDown = (e) => {
    const { clientX, pointerId } = e;
    swiperRef.current.setPointerCapture(pointerId);
    swiperRef.current.left = clientX + left;
    swiperRef.current.addEventListener("pointermove", handlePointerMove);
    swiperRef.current.addEventListener(
      "pointerup",
      (e) => {
        const { pointerId } = e;
        swiperRef.current.releasePointerCapture(pointerId);
        swiperRef.current.removeEventListener("pointermove", handlePointerMove);
      },
      {
        once: true,
      }
    );
  };

  return (
    <Fragment>
      <div className="rc-swiper-container">
        <div
          ref={swiperRef}
          className="rc-swiper-wrapper"
          onPointerDown={handlePointerDown}
        >
          {children}
        </div>
        <ul className="rc-swiper-bullets">
          {Array(children.length)
            .fill("")
            .map((_, index) => {
              return <li key={index}></li>;
            })}
        </ul>
      </div>
    </Fragment>
  );
};

const Slide = ({ children, className }) => {
  return (
    <div className={classNames("rc-swiper-slide", className)}>{children}</div>
  );
};

Slide.propTypes = {
  className: PropTypes.string,
};

Slide.defaultProps = {
  className: null,
};

Swiper.Slide = Slide;
