import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Carousel.scss";

export const Carousel = ({
  arrow,
  indication,
  activeIndicationColor,
  inactiveIndicationColor,
  delay,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef();

  let timer = null;

  useEffect(() => {
    handleAutoPlay();
  });

  const handleAutoPlay = () => {
    timer = setTimeout(() => {
      if (activeIndex < children.length - 1) {
        handleFocus(activeIndex + 1);
        setActiveIndex(activeIndex + 1);
      } else if (activeIndex === children.length - 1) {
        handleFocus(0);
        setActiveIndex(0);
      }
    }, delay);
  };

  const handleFocus = (index) => {
    carouselRef.current?.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleNext = () => {
    if (activeIndex === children.length - 1) {
      clearTimeout(timer);
      handleFocus(0);
      setActiveIndex(0);
    } else {
      clearTimeout(timer);
      handleFocus(activeIndex + 1);
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = async () => {
    if (activeIndex === 0) {
      clearTimeout(timer);
      handleFocus(children.length - 1);
      setActiveIndex(children.length - 1);
    } else {
      clearTimeout(timer);
      handleFocus(activeIndex - 1);
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleDot = (index) => {
    clearTimeout(timer);
    handleFocus(index);
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      {arrow && (
        <>
          <div className="carousel-previous-arrow">
            <i className="fas fa-chevron-left" onClick={() => handlePrev()}></i>
          </div>
          <div className="carousel-next-arrow">
            <i
              className="fas fa-chevron-right"
              onClick={() => handleNext()}
            ></i>
          </div>
        </>
      )}
      {indication.visible && (
        <ul className="carousel-dots">
          {children.map((_, index) => {
            return (
              <li
                key={index}
                className={indication.shape === "dot" ? "dot" : "flat"}
                style={{
                  backgroundColor:
                    activeIndex === index
                      ? activeIndicationColor
                      : inactiveIndicationColor,
                }}
                onClick={() => handleDot(index)}
              ></li>
            );
          })}
        </ul>
      )}
      <div className="carousel-wrapper" ref={carouselRef}>
        {children}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  activeIndicationColor: PropTypes.string,
  inactiveIndicationColor: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Carousel.defaultProps = {
  arrow: true,
  indication: {
    visible: true,
    shape: "flat",
  },
  activeIndicationColor: "#bbb",
  inactiveIndicationColor: "#717171",
  delay: 3000,
};
