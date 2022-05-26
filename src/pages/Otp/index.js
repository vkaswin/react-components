import React from "react";
import { Otp } from "components";

const OtpPage = () => {
  const handleChange = (event) => {
    console.log(event);
  };

  return <Otp inputBox={6} onChange={handleChange} isAutoFocus={true} />;
};

export default OtpPage;
