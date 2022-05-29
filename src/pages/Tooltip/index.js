import React, { Fragment } from "react";
import { Tooltip } from "components";

import "./Tooltip.scss";

const tooltip = [
  { label: "Left", position: "left" },
  { label: "Left Start", position: "left-start" },
  { label: "Left End", position: "left-end" },
  { label: "Right", position: "right" },
  { label: "Right Start", position: "right-start" },
  { label: "Right End", position: "right-end" },
  { label: "Top", position: "top" },
  { label: "Top Start", position: "top-start" },
  { label: "Top End", position: "top-end" },
  { label: "Bottom", position: "bottom" },
  { label: "Bottom Start", position: "bottom-start" },
  { label: "Bottom End", position: "bottom-end" },
];

const TooltipPage = () => {
  return (
    <Fragment>
      <div className="tooltip-wrapper">
        {tooltip.map(({ label, position }, index) => {
          return (
            <Fragment key={index}>
              <button id={`tooltip-${index}`} className="btn btn-secondary">
                {label}
              </button>
              <Tooltip id={`tooltip-${index}`} position={position}>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </span>
              </Tooltip>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TooltipPage;
