import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Tooltip.scss";
import { positionElement } from "utils/positionElement";

export const Tooltip = ({ children, position, text, offset, arrow }) => {
  let toolTipRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    let { current } = toolTipRef;

    let tooltip = current.querySelector(".rc-tooltip") ?? null;

    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.textContent = text;
      tooltip.classList.add("rc-tooltip");
      current.appendChild(tooltip);
    }

    positionElement({
      parent: current,
      child: tooltip,
      position: `${position}-center`,
      offset,
    });

    tooltip.classList.add("show");
  };

  const handleResize = () => {
    let { current } = toolTipRef;
    let tooltip = current.querySelector(".rc-tooltip");
    if (!tooltip) return;
    handleMouseEnter();
  };

  const handleMouseLeave = () => {
    let { current } = toolTipRef;
    let tooltip = current.querySelector(".rc-tooltip");
    tooltip.remove();
  };

  return (
    <div ref={toolTipRef} className="rc-tooltip-container">
      <div
        data-arrow={arrow}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
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
