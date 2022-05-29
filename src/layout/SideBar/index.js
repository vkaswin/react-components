import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "components";
import { classNames } from "utils";
import { useWindowSize } from "hooks";

import "./SideBar.scss";

export const SideBar = ({ isOpen, toggle, options }) => {
  const { width } = useWindowSize();

  const NavBar = () => {
    return (
      <div>
        <div className={classNames("side-bar", { show: isOpen })}>
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
                    className={({ isActive: active }) =>
                      classNames("nav-item", { active })
                    }
                    onClick={toggle}
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
        <NavBar />
      ) : (
        <Drawer toggle={toggle} isOpen={isOpen} position="left">
          <NavBar />
        </Drawer>
      )}
    </Fragment>
  );
};
