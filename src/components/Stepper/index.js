import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Stepper.scss";

export const Stepper = ({
  steps,
  activeStep,
  activeColor,
  inactiveColor,
  activeDot,
  inactiveDot,
  activeConnector,
  inactiveConnector,
  children,
}) => {
  const stepsRef = useRef();

  useEffect(() => {
    stepsRef.current?.children[activeStep].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeStep]);

  return (
    <div className="stepper">
      <div className="stepper-container">
        {steps.map((list, index) => {
          return (
            <div
              key={index}
              className="stepper-wrapper"
              dot-label={index + 1}
              style={{
                "--stepperWidth": `calc(100%/${steps.length})`,
                "--stepperDotBackGroud":
                  index <= activeStep
                    ? activeDot.backgroundColor
                    : inactiveDot.backgroundColor,
                "--stepperDotColor":
                  index <= activeStep ? activeDot.color : inactiveDot.color,
                "--stepperConnector":
                  index < activeStep ? activeConnector : inactiveConnector,
                "--stepperLabelColor":
                  index <= activeStep ? activeColor : inactiveColor,
              }}
            >
              <label>{list}</label>
            </div>
          );
        })}
      </div>
      <div className="stepper-page-container">
        <div ref={stepsRef} className="stepper-page-wrapper">
          {children.map((list, index) => {
            return (
              <div className="stepper-page" key={index}>
                {list}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  activeStep: PropTypes.number.isRequired,
};

Stepper.defaultProps = {
  steps: [],
  activeStep: 0,
};
