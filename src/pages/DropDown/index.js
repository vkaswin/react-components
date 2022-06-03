import React from "react";
import { DropDown } from "components";

import "./DropDown.scss";

const DropDownPage = () => {
  const dropDown = [
    {
      label: "Left Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "left-center",
      trigger: "click",
    },
    {
      label: "Left Start",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "left-start",
      trigger: "click",
    },
    {
      label: "Left End",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "left-end",
      trigger: "click",
    },
    {
      label: "Right Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "right-center",
      trigger: "click",
    },
    {
      label: "Right Start",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "right-start",
      trigger: "click",
    },
    {
      label: "Right End",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "right-end",
      trigger: "click",
    },
    {
      label: "Top Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "top-center",
      trigger: "click",
    },
    {
      label: "Top Start",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "top-start",
      trigger: "click",
    },
    {
      label: "Top End",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "top-end",
      trigger: "click",
    },
    {
      label: "Bottom Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "bottom-center",
      trigger: "click",
    },
    {
      label: "Bottom Start",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "bottom-start",
      trigger: "click",
    },
    {
      label: "Bottom End",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "bottom-end",
      trigger: "click",
    },
    {
      label: "Right Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "right-center",
      trigger: "hover",
    },
    {
      label: "Bottom Center",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "bottom-center",
      trigger: "hover",
    },
    {
      label: "Left Start",
      children: ["Option One", "Option Two", "Option Three", "Option Four"],
      position: "left-start",
      trigger: "hover",
    },
  ];

  return (
    <div>
      <h1>DropDown</h1>
      <div className="drop-down-btn">
        {dropDown.map(({ label, children, position, trigger }, index) => {
          return (
            <DropDown key={index}>
              <DropDown.Toggle trigger={trigger} className="btn btn-secondary">
                <span>{label}</span>
              </DropDown.Toggle>
              <DropDown.Menu position={position}>
                {children.map((list, index) => {
                  return (
                    <DropDown.Item key={index}>
                      <span>{list}</span>
                    </DropDown.Item>
                  );
                })}
              </DropDown.Menu>
            </DropDown>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownPage;
