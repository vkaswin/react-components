import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";
import { Portal } from "components";

import "./Drawer.scss";

export const Drawer = ({
  position,
  isOpen,
  toggle,
  children,
  className,
  portal,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setShow(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = ({ animationName }) => {
    if (String(animationName).includes("slideOut")) {
      setShow(false);
    }
  };

  if (!show) return;

  return (
    <Portal portal={portal}>
      <div>
        <div
          className={classNames("rc-drawer", {
            show: isOpen,
            [className]: className,
          })}
          data-position={position}
          onAnimationEnd={handleAnimationEnd}
        >
          {children}
        </div>
        <div
          className={classNames("rc-drawer-overlay", { show: isOpen })}
          onClick={toggle}
        ></div>
      </div>
    </Portal>
  );
};

Drawer.propType = {
  isOpen: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right", "bottom", "top"]),
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  portal: PropTypes.bool,
};

Drawer.defaultProps = {
  isOpen: false,
  position: "left",
  className: "",
  portal: false,
  toggle: () => {},
};
