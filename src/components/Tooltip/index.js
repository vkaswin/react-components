import React, { useEffect, useRef, useState } from "react";
import { Portal } from "components/Portal";
import PropTypes from "prop-types";
import { classNames, positionElement } from "utils";

import "./Tooltip.scss";

export const Tooltip = ({ children, position, arrow, id }) => {
  const toolTipRef = useRef();

  const referenceRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    referenceRef.current = document.getElementById(id);
    referenceRef.current.addEventListener("mouseenter", handleMouseEnter);
    referenceRef.current.addEventListener("mouseleave", handleMouseLeave);
    // window.addEventListener("resize", handlePosition);
    return () => {
      referenceRef.current.addEventListener("mouseenter", handleMouseEnter);
      referenceRef.current.addEventListener("mouseleave", handleMouseLeave);
      // window.addEventListener("resize", handlePosition);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    handlePosition();
  }, [isOpen]);

  const handlePosition = () => {
    positionElement({
      reference: referenceRef.current,
      element: toolTipRef.current,
      position,
      offset: 10,
    });
  };

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
      <div
        ref={toolTipRef}
        className={classNames("rc-tooltip", { show })}
        onAnimationEnd={handleAnimationEnd}
        data-arrow={arrow}
        data-position={`${position}-center`}
      >
        {children}
      </div>
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
  position: PropTypes.oneOf(["bottom", "top", "left", "right"]),
  text: PropTypes.string,
  offset: PropTypes.number,
  arrow: PropTypes.bool,
};
