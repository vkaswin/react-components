import React, { useEffect, useRef, useState } from "react";
import { Portal } from "components/Portal";
import PropTypes from "prop-types";
import { classNames } from "utils";
import { Popper } from "components";

import "./Tooltip.scss";

const offset = 10;

export const Tooltip = ({ children, position, arrow, id }) => {
  const toolTipRef = useRef();

  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    targetRef.current = document.getElementById(id);
    targetRef.current.addEventListener("mouseenter", handleMouseEnter);
    targetRef.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      targetRef.current.addEventListener("mouseenter", handleMouseEnter);
      targetRef.current.addEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleAnimationEnd = ({ animationName }) => {
    if (animationName === "rc_fadeOut") {
      setIsOpen(false);
    }
  };

  if (!isOpen) return;

  return (
    <Portal>
      <Popper
        target={targetRef}
        position={position}
        offset={offset}
        render={({ styles, attributes }) => {
          return (
            <div
              ref={toolTipRef}
              className={classNames("rc-tooltip", { show })}
              onAnimationEnd={handleAnimationEnd}
              data-arrow={arrow}
              style={styles}
              {...attributes}
            >
              {children}
            </div>
          );
        }}
      />
    </Portal>
  );
};

Tooltip.defaultProps = {
  position: "top",
  arrow: true,
  offset: 10,
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
  ]),
  text: PropTypes.string,
  offset: PropTypes.number,
  arrow: PropTypes.bool,
};
