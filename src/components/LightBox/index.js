import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import imageOne from "assets/images/light-box/image-1.jpg";
import imageTwo from "assets/images/light-box/image-2.jpg";
import imageThree from "assets/images/light-box/image-3.jpg";
import imageFour from "assets/images/light-box/image-4.jpg";
import imageFive from "assets/images/light-box/image-5.jpg";

import "./LightBox.scss";

export const LightBox = ({ isOpen, toggle, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    handleFocus();
  }, [activeIndex]);

  const handleNext = () => {
    let index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    let index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const handleFocus = () => {
    imageRef.current?.children[activeIndex].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleClose = (event) => {
    event.stopPropagation();
    toggle();
  };

  const handleKeyPress = ({ keyCode }) => {
    if (keyCode === 39) {
      handleNext();
      return;
    }
    if (keyCode === 37) {
      handlePrevious();
      return;
    }
  };

  if (!isOpen) return null;

  return (
    <Fragment>
      <div className="light-box-container" onClick={toggle}>
        <div
          className="light-box-next-arrow"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </div>
        <div
          className="light-box-prev-arrow"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="light-box-wrapper">
          <div className="light-box-icon">
            <div className="light-box-icon-card" onClick={handleClose}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div ref={imageRef} className="light-box-image">
            {images.map((list, index) => {
              return (
                <div key={index} className="light-box-image-card">
                  <img src={list} />
                </div>
              );
            })}
          </div>
          <div className="light-box-thumbnail">
            {images.map((list, index) => {
              return (
                <div
                  key={index}
                  className={`light-box-thumbnail-card ${
                    activeIndex !== index ? "active" : ""
                  }`}
                >
                  <img src={list} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LightBox.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

LightBox.defaultProps = {
  isOpen: false,
  toggle: () => {
    return null;
  },
  images: [imageOne, imageTwo, imageThree, imageFour, imageFive],
};
