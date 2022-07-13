import React, { createContext, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Popper } from "components";
import { classNames, clickOutside } from "utils";
import { PopperPlacements } from "utils/constants";
import { CSSTransition } from "react-transition-group";

import "./DropDown.scss";

const DropDownContext = createContext();

export const useDropDown = () => {
  return useContext(DropDownContext);
};

export const DropDown = ({ children }) => {
  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    setIsOpen(true);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <DropDownContext.Provider
      value={{
        isOpen,
        targetRef,
        openDropDown,
        closeDropDown,
      }}
    >
      <div>{children}</div>
    </DropDownContext.Provider>
  );
};

const Toggle = ({ children, trigger, className }) => {
  const { openDropDown, closeDropDown, targetRef } = useDropDown();

  return (
    <button
      className={classNames(className)}
      ref={targetRef}
      onClick={() => trigger === "click" && openDropDown()}
      onMouseEnter={() => trigger === "hover" && openDropDown()}
      onMouseLeave={() => trigger === "hover" && closeDropDown()}
    >
      {children}
    </button>
  );
};

const Menu = ({ children, position, offset, className }) => {
  const { isOpen, targetRef, closeDropDown } = useDropDown();

  const onEntered = (ele) => {
    clickOutside({
      ref: ele,
      onClose: closeDropDown,
      doNotClose: (event) => {
        return targetRef.current.contains(event);
      },
    });
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      unmountOnExit
      classNames="fade"
      onEntered={onEntered}
    >
      <Popper
        referenceElement={targetRef}
        position={position}
        offset={offset}
        render={({ styles, position, ref }) => {
          return (
            <div
              ref={ref}
              className="rc-dropdown-menu"
              style={styles.popper}
              data-position={position}
            >
              {children}
            </div>
          );
        }}
      />
    </CSSTransition>
  );
};

const Item = ({ children, onClick }) => {
  const { closeDropDown } = useDropDown();

  const handleClickItem = () => {
    closeDropDown();
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
  trigger: PropTypes.string,
};

// Menu PropTypes

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(PopperPlacements),
  offset: PropTypes.number,
};

Menu.defaultProps = {
  position: "bottom-start",
  offset: 10,
  className: null,
};

// Toggle PropTypes

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.oneOf(["click", "hover"]),
  classNames: PropTypes.string,
};

Toggle.defaultProps = {
  trigger: "click",
  classNames: "",
};

// Item PropTypes

Item.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
