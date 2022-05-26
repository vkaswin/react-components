import React from "react";
import { Button } from "components";
import { useButtonLoader } from "hooks";

import "./Buttons.scss";

const ButtonPage = () => {
  const [btnOne, btnOneLoading] = useButtonLoader("Button One");

  const [btnTwo, btnTwoLoading] = useButtonLoader("Button Two");

  const buttonClick = (btnType) => {
    if (btnType === "btn-one") {
      btnOneLoading(true);
      setTimeout(() => {
        btnOneLoading(false);
      }, 2000);
    } else if (btnType === "btn-two") {
      btnTwoLoading(true);
      setTimeout(() => {
        btnTwoLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="button-loader">
          <div className="button-loader-title">
            <label>Button Loader</label>
          </div>
          <div className="button-loader-btn">
            <Button
              refs={btnOne}
              className="normal-btn"
              label="Button One"
              onClick={() => buttonClick("btn-one")}
            />
            <Button
              refs={btnTwo}
              className="normal-btn"
              label="Button Two"
              onClick={() => buttonClick("btn-two")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
