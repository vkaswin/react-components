import React from "react";
import { ScrollableTab } from "components";

const ScrollableTabPage = () => {
  const tabs = [
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
    "Item Six",
    "Item Seven",
    "Item Eight",
    "Item Nine",
    "Item Ten",
    "Item Eleven",
    "Item Twelve",
    "Item Thirteen",
    "Item Fourteen",
    "Item Fifteen",
    "Item Sixteen",
    "Item Seventeen",
    "Item Eighteen",
    "Item Nineteen",
    "Item Twenty",
    "Item Twenty One",
    "Item Twenty Two",
    "Item Twenty Three",
    "Item Twenty Four",
    "Item Twenty Five",
    "Item Twenty Six",
    "Item Twenty Seven",
    "Item Twenty Eight",
    "Item Twenty Nive",
    "Item Thirty",
    "Item Thirty One",
    "Item Thirty Two",
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <ScrollableTab options={tabs} />
      </div>
    </div>
  );
};

export default ScrollableTabPage;
