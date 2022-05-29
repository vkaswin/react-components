import React from "react";
import { DropDown } from "components";

import "./DropDown.scss";

const DropDownPage = () => {
  const dropDown = [
    {
      label: "Left",
      children: ["Option One", "Option Two", "Option Three"],
      position: "left",
      action: "click",
    },
    {
      label: "Left Start",
      children: ["Option One", "Option Two", "Option Three"],
      position: "left-start",
      action: "click",
    },
    {
      label: "Left End",
      children: ["Option One", "Option Two", "Option Three"],
      position: "left-end",
      action: "click",
    },
    {
      label: "Right",
      children: ["Option One", "Option Two", "Option Three"],
      position: "right",
      action: "click",
    },
    {
      label: "Right Start",
      children: ["Option One", "Option Two", "Option Three"],
      position: "right-start",
      action: "click",
    },
    {
      label: "Right End",
      children: ["Option One", "Option Two", "Option Three"],
      position: "right-end",
      action: "click",
    },
    {
      label: "Top",
      children: ["Option One", "Option Two", "Option Three"],
      position: "top",
      action: "click",
    },
    {
      label: "Top Start",
      children: ["Option One", "Option Two", "Option Three"],
      position: "top-start",
      action: "click",
    },
    {
      label: "Top End",
      children: ["Option One", "Option Two", "Option Three"],
      position: "top-end",
      action: "click",
    },
    {
      label: "Bottom",
      children: ["Option One", "Option Two", "Option Three"],
      position: "bottom",
      action: "click",
    },
    {
      label: "Bottom Start",
      children: ["Option One", "Option Two", "Option Three"],
      position: "bottom-start",
      action: "click",
    },
    {
      label: "Bottom End",
      children: ["Option One", "Option Two", "Option Three"],
      position: "bottom-end",
      action: "click",
    },
    {
      label: "Right",
      children: ["Option One", "Option Two", "Option Three"],
      position: "right",
      action: "hover",
    },
    {
      label: "Bottom",
      children: ["Option One", "Option Two", "Option Three"],
      position: "bottom",
      action: "hover",
    },
    {
      label: "Left Start",
      children: ["Option One", "Option Two", "Option Three"],
      position: "left-start",
      action: "hover",
    },
  ];

  return (
    <div>
      <h1>DropDown</h1>
      <div className="drop-down-btn">
        {dropDown.map(({ label, children, position, action }, index) => {
          return (
            <DropDown key={index}>
              <DropDown.Toggle action={action} className="btn btn-secondary">
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
