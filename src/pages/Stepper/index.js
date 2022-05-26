import React, { Fragment, useState } from "react";
import { Button, Stepper } from "components";

import "./Stepper.scss";

const StepperPage = () => {
  let [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Select campaign settings",
    "Create an ad",
  ];

  const activeDotStyle = {
    backgroundColor: "#6054E5",
    color: "white",
  };

  const inactiveDotStyle = {
    backgroundColor: "#9e9e9e",
    color: "white",
  };

  const handleStepper = (isNext) => {
    let currentStep = isNext ? activeStep + 1 : activeStep - 1;
    setActiveStep(currentStep);
  };

  return (
    <Fragment>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor="#766ceb"
        inactiveColor="gray"
        activeDot={activeDotStyle}
        inactiveDot={inactiveDotStyle}
        activeConnector="#978eff"
        inactiveConnector="#C4C4C4"
      >
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive />
      </Stepper>
      <div className="stepper-btn">
        <Button
          label="Previous"
          className="btn btn-outline-secondary"
          onClick={() => handleStepper(false)}
          disabled={activeStep === 0}
        />
        <Button
          label="Next"
          className="btn btn-outline-secondary"
          onClick={() => handleStepper(true)}
          disabled={activeStep === 4}
        />
      </div>
    </Fragment>
  );
};

export default StepperPage;

export const StepOne = () => {
  return (
    <div>
      <span>Step One</span>
    </div>
  );
};

export const StepTwo = () => {
  return (
    <div>
      <span>Step Two</span>
    </div>
  );
};

export const StepThree = () => {
  return (
    <div>
      <span>Step Three</span>
    </div>
  );
};

export const StepFour = () => {
  return (
    <div>
      <span>Step Four</span>
    </div>
  );
};

export const StepFive = () => {
  return (
    <div>
      <span>Step Five</span>
    </div>
  );
};
