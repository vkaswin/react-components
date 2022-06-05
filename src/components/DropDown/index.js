import React, { createContext, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Popper, Portal } from "components";
import { classNames, clickOutside } from "utils";
import { PopperPlacements } from "utils/constants";

import "./DropDown.scss";

const DropDownContext = createContext();

export const useDropDown = () => {
  return useContext(DropDownContext);
};

export const DropDown = ({ children }) => {
  const targetRef = useRef();

  const dropDownRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const openDropDown = () => {
    setIsOpen(true);
    setShow(true);
  };

  const closeDropDown = () => {
    setShow(false);
  };

  const onAnimationEnd = ({ animationName }) => {
    if (animationName === "rc_fadeIn") {
      clickOutside({
        ref: dropDownRef.current,
        onClose: closeDropDown,
        doNotClose: (event) => {
          return targetRef.current.contains(event);
        },
      });
    }
    if (animationName === "rc_fadeOut") {
      setIsOpen(false);
    }
  };

  return (
    <DropDownContext.Provider
      value={{
        isOpen,
        show,
        targetRef,
        dropDownRef,
        openDropDown,
        closeDropDown,
        onAnimationEnd,
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
  const { isOpen, show, targetRef, dropDownRef, onAnimationEnd } =
    useDropDown();

  if (!isOpen) return;

  return (
    <Popper
      target={targetRef}
      position={position}
      offset={offset}
      render={({ styles, position, ref }) => {
        const setDropDownRef = (element) => {
          ref(element);
          dropDownRef.current = element;
        };
        return (
          <div
            ref={setDropDownRef}
            className={classNames("rc-dropdown-menu", {
              show,
              [className]: className,
            })}
            onAnimationEnd={onAnimationEnd}
            style={styles}
            data-position={position}
          >
            {children}
          </div>
        );
      }}
    />
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
