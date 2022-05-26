import React from "react";

import "./VerticalStepper.scss";

export const VerticalStepper = ({
  steps,
  height,
  activeStep,
  activeColor,
  inactiveColor,
  activeDot,
  inactiveDot,
  activeConnector,
  inactiveConnector,
}) => {
  return (
    <div className="vertical-stepper-container">
      {steps.map((list, index) => {
        return (
          <div
            key={index}
            className="vertical-stepper-wrapper"
            style={{
              height: `calc(${height / steps.length}px)`,
              color: index <= activeStep ? activeColor : inactiveColor,
            }}
          >
            <div
              className="vertical-stepper-dot"
              style={{
                backgroundColor:
                  index <= activeStep
                    ? activeDot.backgroundColor
                    : inactiveDot.backgroundColor,
                color:
                  index <= activeStep ? activeDot.color : inactiveDot.color,
              }}
            >
              <span>{index + 1}</span>
            </div>
            <div>
              <label>{list}</label>
            </div>
            {index !== steps.length - 1 && (
              <div
                className="vertical-stepper-connector"
                style={{
                  borderColor:
                    index <= activeStep - 1
                      ? activeConnector
                      : inactiveConnector,
                }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
