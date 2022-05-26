import React, { useState } from "react";
import { Button, LightBox } from "components";

const LightBoxPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Light Box</h1>
      <Button
        className="btn btn-outline-secondary"
        label="Toggle"
        onClick={() => toggle()}
      />
      <LightBox isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default LightBoxPage;
