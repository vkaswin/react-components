import React from "react";

import "./Header.scss";

export const Header = ({ toggle }) => {
  return (
    <div className="header">
      <header>
        <div className="header-left">
          <i className="fas fa-bars" onClick={toggle}></i>
        </div>
        <div className="header-right">
          <button className="header-search">
            <div className="search-icon">
              <i className="far fa-search"></i>
              <span>Search...</span>
            </div>
            <label>Ctrl+F</label>
          </button>
          <div className="header-icon">
            <a
              className="github-icon"
              href="https://github.com/vkaswin/react-components"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
