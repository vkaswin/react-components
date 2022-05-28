import React, { Fragment } from "react";
import { Tooltip } from "components";

import "./Tooltip.scss";

const tooltip = [
  { label: "Tooltip on left", position: "left" },
  { label: "Tooltip on right", position: "right" },
  { label: "Tooltip on top", position: "top" },
  { label: "Tooltip on bottom", position: "bottom" },
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
