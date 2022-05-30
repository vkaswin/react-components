import React, { Fragment } from "react";
import { ScrollTo } from "components";

import "./ScrollTo.scss";

const ScrollToPage = () => {
  return (
    <div>
      {Array.from(Array(100), (_, index) => {
        return (
          <div key={index} className="p-2">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
        );
      })}
      <ScrollTo direction="bottom" position="left">
        <div className="scroll-icon">
          <i className="fas fa-arrow-down"></i>
        </div>
      </ScrollTo>
      <ScrollTo direction="top" position="right">
        <div className="scroll-icon">
          <i className="fas fa-arrow-up"></i>
        </div>
      </ScrollTo>
    </div>
  );
};

export default ScrollToPage;
