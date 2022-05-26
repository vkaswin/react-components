import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./Accordian.scss";

export const Accordain = ({ title, content, activeStyle, inactiveStyle }) => {
  let contentRef = useRef(null);

  let [isOpen, setIsOpen] = useState(false);

  let [contentHeight, setContentHeight] = useState();

  useEffect(() => {
    const { scrollHeight } = contentRef.current;
    setContentHeight(scrollHeight);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordian-wrapper">
      <div
        className="accordian-title"
        style={isOpen ? activeStyle : inactiveStyle}
        onClick={() => toggle()}
      >
        <label dangerouslySetInnerHTML={{ __html: title }}></label>
        <i
          className="fas fa-chevron-down"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        ></i>
      </div>
      <div
        className="accordian-body"
        ref={contentRef}
        style={{
          height: isOpen ? `${contentHeight}px` : "0px",
        }}
      >
        <div
          className="accordian-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

Accordain.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Accordain.defaultProps = {
  title: "",
  content: "",
  activeStyle: { backgroundColor: "#e7f1ff", color: "#0c63e4" },
  inactiveStyle: { backgroundColor: "#fff", color: "#212529" },
};
