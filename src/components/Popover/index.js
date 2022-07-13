import React, { createContext, useContext, useRef, useState } from "react";
import { Popper, Portal } from "components";
import PropTypes from "prop-types";
import { clickOutside } from "utils";
import { PopperPlacements } from "utils/constants";
import { CSSTransition } from "react-transition-group";

import "./Popover.scss";

const PopoverContext = createContext();

const usePopover = () => {
  return useContext(PopoverContext);
};

export const Popover = ({ children }) => {
  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const openPopover = () => {
    setIsOpen(true);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        targetRef,
        openPopover,
        closePopover,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

const Toggle = ({ children }) => {
  const { openPopover, targetRef } = usePopover();

  return (
    <div ref={targetRef} onClick={openPopover}>
      {children}
    </div>
  );
};

const Menu = ({ children, position, arrow, offset }) => {
  const { isOpen, targetRef, closePopover } = usePopover();

  const onEntered = (ele) => {
    clickOutside({
      ref: ele,
      onClose: closePopover,
      doNotClose: (event) => {
        return targetRef.current.contains(event);
      },
    });
  };

  return (
    <Portal>
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
          arrow={arrow}
          arrowRect={16}
          render={({ styles, position, ref }) => {
            return (
              <div className="rc-popover">
                <div
                  ref={ref}
                  className="rc-popover-menu"
                  style={styles.popper}
                  data-position={position}
                >
                  {children}
                </div>
                {arrow && (
                  <div
                    className="rc-popover-arrow"
                    style={styles.arrow}
                    data-position={position}
                  ></div>
                )}
              </div>
            );
          }}
        />
      </CSSTransition>
    </Portal>
  );
};

Popover.Toggle = Toggle;
Popover.Menu = Menu;

// Popover
Popover.propTypes = {
  children: PropTypes.node.isRequired,
};

// Popover Toggle
Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

// Popover Menu
Menu.defaultProps = {
  position: "top-center",
  arrow: true,
  offset: 15,
  className: null,
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(PopperPlacements),
  offset: PropTypes.number,
  arrow: PropTypes.bool,
  className: PropTypes.string,
};
