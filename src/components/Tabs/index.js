import React, { useEffect, useRef, useState } from "react";

import "./Tabs.scss";

export const Tabs = ({ tab = 0, children }) => {
  let [width, setWidth] = useState();
  let [left, setLeft] = useState();
  let tabRef = useRef();

  useEffect(() => {
    setLeft(tabRef.current.children[tab]?.offsetLeft);
    setWidth(tabRef.current.children[tab]?.offsetWidth);
  }, [tab]);
  return (
    <div className="tab-container">
      <div className="tab-wrapper" ref={tabRef}>
        {children}
        <span
          className="tab-indicator"
          style={{ left: left, width: width }}
        ></span>
      </div>
    </div>
  );
};

export const TabItem = ({ className, label, onClick }) => {
  return (
    <div className={`tab-item ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};
