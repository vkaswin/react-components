import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Popper, Portal } from "components";
import PropTypes from "prop-types";
import { classNames, clickOutside } from "utils";
import { PopperPlacements } from "utils/constants";

import "./Popover.scss";

const PopoverContext = createContext();

const usePopover = () => {
  return useContext(PopoverContext);
};

export const Popover = ({ children }) => {
  const targetRef = useRef();

  const popoverRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const openPopover = () => {
    setIsOpen(true);
    setShow(true);
  };

  const closePopover = () => {
    setShow(false);
  };

  const onAnimationEnd = ({ animationName }) => {
    if (animationName === "rc_fadeIn") {
      clickOutside({
        ref: popoverRef.current,
        onClose: closePopover,
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
    <PopoverContext.Provider
      value={{
        isOpen,
        show,
        targetRef,
        popoverRef,
        popoverRef,
        openPopover,
        onAnimationEnd,
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

const Menu = ({ children, position, arrow, offset, className }) => {
  const { isOpen, show, targetRef, popoverRef, onAnimationEnd } = usePopover();

  if (!isOpen) return;

  return (
    <Portal>
      <Popper
        target={targetRef}
        position={position}
        offset={offset}
        render={({ styles, position, ref }) => {
          const setPopoverRef = (element) => {
            ref(element);
            popoverRef.current = element;
          };
          return (
            <div
              ref={setPopoverRef}
              className={classNames("rc-popover", {
                show: show,
                [className]: className,
              })}
              onAnimationEnd={onAnimationEnd}
              style={styles}
            >
              <div
                className={classNames("rc-popover-content", {
                  [className]: className,
                })}
              >
                {children}
                {arrow && (
                  <div
                    className="rc-popover-arrow"
                    data-position={position}
                  ></div>
                )}
              </div>
            </div>
          );
        }}
      />
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
