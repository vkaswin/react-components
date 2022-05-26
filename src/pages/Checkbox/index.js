import React, { useState } from "react";
import { CheckBox } from "components";

import "./Checkbox.scss";

const CheckBoxPage = () => {
  const [checkbox, setCheckbox] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  return (
    <div className="checkbox-wrapper">
      <div>
        <CheckBox
          label="Cricket"
          name="one"
          checked={checkbox.one}
          color="#1976d2"
          onChange={handleCheckbox}
        />
      </div>
      <div>
        <CheckBox
          label="Basket Ball"
          name="two"
          checked={checkbox.two}
          color="#9c27b0"
          onChange={handleCheckbox}
        />
      </div>

      <div>
        <CheckBox
          label="Hockey"
          name="three"
          checked={checkbox.three}
          color="#d81b60"
          onChange={handleCheckbox}
        />
      </div>
      <div>
        <CheckBox
          label="Foot Ball"
          name="four"
          checked={checkbox.four}
          color="#766ceb"
          onChange={handleCheckbox}
        />
      </div>
      <div>
        <CheckBox
          label="Volley Ball"
          name="five"
          checked={checkbox.five}
          color="#00d9c5"
          onChange={handleCheckbox}
        />
      </div>
    </div>
  );
};

export default CheckBoxPage;
