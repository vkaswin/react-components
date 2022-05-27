import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "utils";
import { useWindowSize } from "hooks";
import { Drawer } from "components";

import "./SideBar.scss";

export const SideBar = ({ isOpen, toggleNavBar, options }) => {
  console.log(isOpen, "isOpen");
  const { width } = useWindowSize();

  const handleNavBar = () => {
    let { matches } = window.matchMedia(`(max-width: 992px)`);
    if (!matches) return;
    toggleNavBar();
  };

  const Element = () => {
    return (
      <div>
        <div className={classNames("side-bar", { show: isOpen ?? false })}>
          <div className="nav-title">
            <b>React Components</b>
          </div>
          <ul>
            {options
              .sort((curr, prev) => {
                return curr.label.localeCompare(prev.label);
              })
              .map(({ label, to }, index) => {
                return (
                  <NavLink
                    key={index}
                    to={to}
                    className={({ isActive }) =>
                      "nav-item " + (isActive ? "active" : "")
                    }
                    onClick={handleNavBar}
                  >
                    <li>{label}</li>
                  </NavLink>
                );
              })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {width > 992 ? (
        <Element />
      ) : (
        <Drawer toggle={toggleNavBar} isOpen={isOpen ?? false} position="left">
          <Element />
        </Drawer>
      )}
    </Fragment>
  );
};
