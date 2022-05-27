import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

import "./Layout.scss";

const options = [
  {
    label: "Accordian",
    to: "accordian",
  },
  {
    label: "Carousel",
    to: "carousel",
  },
  {
    label: "Stepper",
    to: "stepper",
  },
  {
    label: "Collapse",
    to: "collapse",
  },
  {
    label: "Input",
    to: "input",
  },
  {
    label: "CheckBox",
    to: "checkbox",
  },
  {
    label: "Switch",
    to: "switch",
  },
  {
    label: "Radio",
    to: "radio",
  },
  {
    label: "Light Box",
    to: "light-box",
  },
  {
    label: "Modal",
    to: "modal",
  },
  {
    label: "Buttons",
    to: "buttons",
  },
  {
    label: "Tag Input",
    to: "tag-input",
  },
  {
    label: "Vertical Stepper",
    to: "vertical-stepper",
  },
  {
    label: "Dropdown",
    to: "drop-down",
  },
  {
    label: "Otp",
    to: "otp",
  },
  {
    label: "File Upload",
    to: "file-upload",
  },
  {
    label: "Infinite Scroll",
    to: "infinite-scroll",
  },
  {
    label: "Pagination",
    to: "pagination",
  },
  {
    label: "Lazy Load",
    to: "lazy-load",
  },
  {
    label: "Scrollable Tab",
    to: "scrollable-tab",
  },
  {
    label: "Toast",
    to: "toast",
  },
  {
    label: "Tooltip",
    to: "tooltip",
  },
  {
    label: "Draggable",
    to: "draggable",
  },
  {
    label: "Form Validation",
    to: "form-validation",
  },
  {
    label: "Video Player",
    to: "video-player",
  },
  {
    label: "Multi Select",
    to: "multi-select",
  },
  {
    label: "Date Picker",
    to: "date-picker",
  },
  {
    label: "DropZone",
    to: "drop-zone",
  },
  {
    label: "Drawer",
    to: "drawer",
  },
  {
    label: "Tab",
    to: "tab",
  },
];

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout">
      <SideBar isOpen={isOpen} toggleNavBar={toggleNavBar} options={options} />
      <Header toggleNavBar={toggleNavBar} />
      <Outlet />
    </div>
  );
};

export default Layout;
