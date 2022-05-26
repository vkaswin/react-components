import React, { useState } from "react";
import { Radio } from "components";

import "./Radio.scss";

const RadioPage = () => {
  const [radio, setRadio] = useState("netBanking");

  const handleRadio = (event) => {
    const { value } = event.target;
    setRadio(value);
  };

  return (
    <div className="radio-wrapper">
      <div>
        <Radio
          label="Net Banking"
          name="paymentMode"
          value="netBanking"
          color="#1976d2"
          checked={radio === "netBanking" ? true : false}
          onChange={handleRadio}
        />
      </div>
      <div>
        <Radio
          label="Debit Card"
          name="paymentMode"
          value="debit"
          color="#9c27b0"
          checked={radio === "debit" ? true : false}
          onChange={handleRadio}
        />
      </div>
      <div>
        <Radio
          label="Credit Card"
          name="paymentMode"
          value="credit"
          color="#d81b60"
          checked={radio === "credit" ? true : false}
          onChange={handleRadio}
        />
      </div>
      <div>
        <Radio
          label="UPI"
          name="paymentMode"
          value="upi"
          color="#766ceb"
          checked={radio === "upi" ? true : false}
          onChange={handleRadio}
        />
      </div>
      <div>
        <Radio
          label="Cash on Delivery"
          name="paymentMode"
          value="cod"
          color="#00d9c5"
          checked={radio === "cod" ? true : false}
          onChange={handleRadio}
        />
      </div>
    </div>
  );
};

export default RadioPage;
