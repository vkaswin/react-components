import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Portal } from "components/Portal";
import { CSSTransition } from "react-transition-group";
import { classNames } from "utils";

import imageOne from "assets/images/light-box/image-1.jpg";
import imageTwo from "assets/images/light-box/image-2.jpg";
import imageThree from "assets/images/light-box/image-3.jpg";
import imageFour from "assets/images/light-box/image-4.jpg";
import imageFive from "assets/images/light-box/image-5.jpg";

import styles from "./LightBox.module.scss";

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

  const handleNext = (event) => {
    if (event) event.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = (event) => {
    if (event) event.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleFocus = () => {
    imageRef.current?.children[activeIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const handleKeyPress = ({ keyCode }) => {
    if (keyCode === 39) {
      handleNext();
    } else if (keyCode === 37) {
      handlePrevious();
    }
  };

  const handleSelect = (e, index) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={{ enterActive: styles.enter, exitActive: styles.exit }}
        unmountOnExit
      >
        <div className={styles.container}>
          <div className={styles.wrapper} onClick={toggle}>
            <div ref={imageRef} className={styles.image_wrapper}>
              {images.map((list, index) => {
                return (
                  <div key={index} className={styles.image_card}>
                    <img src={list} />
                  </div>
                );
              })}
            </div>
            <div className={styles.thumbnail_wrapper}>
              {images.map((list, index) => {
                return (
                  <div
                    key={index}
                    className={classNames(styles.thumbnail_card, {
                      [styles.active]: activeIndex !== index,
                    })}
                    onClick={(e) => handleSelect(e, index)}
                  >
                    <img src={list} />
                  </div>
                );
              })}
              <div className={styles.next_arrow} onClick={handleNext}>
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className={styles.prev_arrow} onClick={handlePrevious}>
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </CSSTransition>
    </Portal>
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
