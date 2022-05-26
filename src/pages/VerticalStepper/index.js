import React, { useState } from "react";
import { VerticalStepper, Button } from "components";

import "./VerticalStepper.scss";

const VerticalStepperPage = () => {
  let [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Select campaign settings",
    "Create an ad group",
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

  return (
    <div className="row">
      <div className="col-md-3">
        <VerticalStepper
          steps={steps}
          height={500}
          activeStep={activeStep}
          activeColor="#766ceb"
          inactiveColor="gray"
          activeDot={activeDotStyle}
          inactiveDot={inactiveDotStyle}
          activeConnector="#978eff"
          inactiveConnector="#C4C4C4"
        />
      </div>
      <div className="col-md-9">
        <div className="vertical-stepper-btn">
          <Button
            label="Previous"
            className="btn btn-outline-secondary"
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep === 0}
          />
          <Button
            label="Next"
            className="btn btn-outline-secondary"
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep === 2}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalStepperPage;
