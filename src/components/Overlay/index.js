import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

import "./Overlay.scss";

export const Overlay = ({ isOpen, toggle, zIndex, portal }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setShow(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = ({ animationName }) => {
    if (animationName == "rc_fadeOut") {
      setShow(false);
    }
  };

  if (!show) return;

  return (
    <div
      style={{ "--overlay-zindex": zIndex }}
      className={classNames("rc-overlay", { show: isOpen })}
      onClick={toggle}
      // onAnimationEnd={handleAnimationEnd}
    ></div>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: () => {},
};

Overlay.defaultProps = {
  zIndex: 1025,
  isOpen: false,
  toggle: () => {},
};
