import React, { Fragment, useEffect, useState } from "react";
import { Portal } from "components";
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

  const Element = () => {
    return (
      <div
        style={{ "--overlay-zindex": zIndex }}
        className={classNames("rc-overlay", { show: isOpen })}
        onClick={toggle}
        onAnimationEnd={handleAnimationEnd}
      ></div>
    );
  };

  if (!show) return;

  return (
    <Fragment>
      {portal ? (
        <Portal>
          <Element />
        </Portal>
      ) : (
        <Element />
      )}
    </Fragment>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  portal: PropTypes.bool,
  toggle: () => {},
};

Overlay.defaultProps = {
  zIndex: 1025,
  isOpen: false,
  portal: true,
  toggle: () => {},
};
