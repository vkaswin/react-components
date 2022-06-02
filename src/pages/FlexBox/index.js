import React, { Fragment } from "react";

import "./FlexBox.scss";

const FlexBox = () => {
  return (
    <Fragment>
      <div className="row">
        {Array(12)
          .fill("")
          .map((_, index) => {
            return (
              <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                key={index}
              >
                <div className="flex-item">{index + 1}</div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default FlexBox;
