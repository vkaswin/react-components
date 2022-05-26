import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Collapse.scss";

export const Collapse = ({ children, action, trigger }) => {
  const collapse = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickEvent = (type) => {
    ["click"].forEach((event) => {
      document.getElementById(trigger)[type](event, toggle);
    });
  };

  const handleMouseEvent = (type) => {
    ["mouseenter", "mouseleave"].forEach((event) => {
      document.getElementById(trigger)[type](event, toggle);
    });
  };

  // useEffect(() => {
  //   if (action === "click") handleClickEvent("addEventListener");
  //   if (action === "hover") handleMouseEvent("addEventListener");
  //   return () => {
  //     if (action === "click") handleClickEvent("removeEventListener");
  //     if (action === "hover") handleMouseEvent("removeEventListener");
  //   };
  // }, []);

  const toggle = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      ref={collapse}
      className="collapse-wrapper"
      style={{ height: isOpen ? `${collapse.current?.scrollHeight}px` : "0px" }}
    >
      {children}
    </div>
  );
};

Collapse.propTypes = {
  action: PropTypes.oneOf(["click", "hover"]),
  children: PropTypes.node.isRequired,
  trigger: PropTypes.string.isRequired,
};

Collapse.defaultProps = {
  action: "click",
};
