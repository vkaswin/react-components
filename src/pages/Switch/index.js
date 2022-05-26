import React, { useState } from "react";
import { Switch } from "components";

import "./Switch.scss";

const SwitchPage = () => {
  const [checkbox, setCheckbox] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  return (
    <div className="switch-wrapper">
      <div>
        <Switch
          label="Label One"
          name="one"
          onChange={handleChange}
          checked={checkbox.one}
        />
      </div>
      <div>
        <Switch
          label="Label Two"
          name="two"
          onChange={handleChange}
          checked={checkbox.two}
          headColor="#9c27b0"
          barColor="#ce96d9"
        />
      </div>
      <div>
        <Switch
          label="Label Three"
          name="three"
          onChange={handleChange}
          checked={checkbox.three}
          headColor="#ed6c01"
          barColor="#f4b589"
        />
      </div>
      <div>
        <Switch
          label="Label Four"
          name="four"
          onChange={handleChange}
          checked={checkbox.four}
          headColor="#d81b60"
          barColor="#ea8eb0"
        />
      </div>
      <div>
        <Switch
          label="Label Five"
          name="five"
          onChange={handleChange}
          checked={checkbox.five}
          headColor="#2f9140"
          barColor="#65c466"
        />
      </div>
    </div>
  );
};

export default SwitchPage;
