import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ScrollTo.scss";
import { classNames } from "utils";

export const ScrollTo = ({ children, className, position, direction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const { innerHeight } = window;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = ({
    target: {
      scrollingElement: { scrollTop, scrollHeight },
    },
  }) => {
    if (direction === "bottom") {
      if (scrollHeight - scrollTop === innerHeight) {
        setShow(false);
        return;
      }

      if (scrollTop > 0) {
        setIsOpen(true);
        setShow(true);
        return;
      }

      if (scrollTop <= 0) {
        setShow(false);
        return;
      }
    }

    if (direction === "top") {
      if (scrollTop === 0) {
        setShow(false);
        return;
      }

      if (scrollTop > 0) {
        setIsOpen(true);
        setShow(true);
        return;
      }

      if (scrollTop < 0) {
        setShow(false);
        return;
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const onAnimationEnd = ({ animationName }) => {
    if (animationName === "rc_fadeOut") {
      setIsOpen(false);
    }
  };

  if (!isOpen) return;

  return (
    <div
      className={classNames("rc-scroll-to", className, { show })}
      onClick={direction === "top" ? scrollToTop : scrollToBottom}
      onAnimationEnd={onAnimationEnd}
      data-position={position}
    >
      {children}
    </div>
  );
};

ScrollTo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["left", "right"]),
  direction: PropTypes.oneOf(["top", "bottom"]),
};

ScrollTo.defaultProps = {
  className: "",
  position: "right",
  direction: "bottom",
};
