import React from "react";

import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="rc-loader">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
