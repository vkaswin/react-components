import React, { createContext, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { positionElement } from "utils/positionElement";

import "./DropDown.scss";

const DropDownContext = createContext();

export const useDropDown = () => {
  return useContext(DropDownContext);
};

export const DropDown = ({ children }) => {
  const dropdownRef = useRef();

  const offset = 5;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (!dropdownRef.current.classList.contains("show")) return;
    handleDropDown({ isOpen: true });
  };

  const toggle = ({ isOpen }) => {
    if (isOpen) {
      dropdownRef.current.classList.add("show");
      window.addEventListener("click", handleClickOutside);
    } else {
      dropdownRef.current.classList.remove("show");
    }
  };

  const handleDropDown = ({ isOpen }) => {
    toggle({ isOpen });

    let parent = dropdownRef.current.querySelector(".rc-dropdown-toggle");

    let child = dropdownRef.current.querySelector(".rc-dropdown-menu");

    let {
      attributes: {
        "data-position": { value: position },
      },
    } = dropdownRef.current;

    positionElement({
      parent,
      child,
      position,
      offset,
    });
  };

  const handleClickOutside = ({ target }) => {
    console.log(dropdownRef.current);
    if (!dropdownRef.current.contains(target)) {
      toggle({ isOpen: false });
      window.removeEventListener("click", handleClickOutside);
    }
  };

  return (
    <DropDownContext.Provider value={{ toggle, handleDropDown, dropdownRef }}>
      <div ref={dropdownRef} className="rc-dropdown">
        {children}
      </div>
    </DropDownContext.Provider>
  );
};

const Toggle = ({ children, action }) => {
  const { handleDropDown, dropdownRef, toggle } = useContext(DropDownContext);

  useEffect(() => {
    if (action === "click") return;
    dropdownRef.current.onmouseenter = () =>
      handleDropDown({
        isOpen: !dropdownRef.current.classList.contains("show"),
      });

    dropdownRef.current.onmouseleave = () => toggle({ isOpen: false });
  }, []);

  return (
    <div
      className="rc-dropdown-toggle"
      data-action={action}
      onClick={() =>
        action === "click" &&
        handleDropDown({
          isOpen: !dropdownRef.current.classList.contains("show"),
        })
      }
    >
      {children}
    </div>
  );
};

const Menu = ({ children, position }) => {
  const { dropdownRef } = useContext(DropDownContext);

  useEffect(() => {
    dropdownRef.current.setAttribute("data-position", position);
  }, []);

  return <div className="rc-dropdown-menu">{children}</div>;
};

const Item = ({ children, onClick }) => {
  const { toggle } = useContext(DropDownContext);

  const handleClickItem = () => {
    toggle({ isOpen: false });
    if (typeof onClick === "function") onClick();
  };

  return (
    <button className="rc-dropdown-item" onClick={handleClickItem}>
      {children}
    </button>
  );
};

DropDown.Toggle = Toggle;
DropDown.Menu = Menu;
DropDown.Item = Item;

// DropDown PropTypes

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.string,
};

// Menu PropTypes

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "left-start",
    "left-center",
    "left-end",
    "right-start",
    "right-center",
    "right-end",
    "top-start",
    "top-center",
    "top-end",
    "bottom-start",
    "bottom-center",
    "bottom-end",
  ]).isRequired,
};

// Toggle PropTypes

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.oneOf(["click", "hover"]).isRequired,
};

Toggle.defaultProps = {
  action: "click",
};

// Item PropTypes

Item.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
