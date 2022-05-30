import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "components/Portal";
import PropTypes from "prop-types";
import { classNames } from "utils";
import { Popper } from "components";

import "./Tooltip.scss";

const ToolTipContext = createContext();

const useToolTip = () => {
  return useContext(ToolTipContext);
};

export const Tooltip = ({ children }) => {
  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const openToolTip = () => {
    setIsOpen(true);
    setShow(true);
  };

  const closeToolTip = () => {
    setShow(false);
  };

  const onAnimationEnd = ({ animationName }) => {
    if (animationName === "rc_fadeOut") {
      setIsOpen(false);
    }
  };

  return (
    <ToolTipContext.Provider
      value={{
        targetRef,
        isOpen,
        show,
        openToolTip,
        closeToolTip,
        onAnimationEnd,
      }}
    >
      {children}
    </ToolTipContext.Provider>
  );
};

const Toggle = ({ children }) => {
  const { openToolTip, closeToolTip, targetRef } = useToolTip();
  return (
    <div ref={targetRef} onMouseEnter={openToolTip} onMouseLeave={closeToolTip}>
      {children}
    </div>
  );
};

const Menu = ({ children, position, arrow, offset }) => {
  const { isOpen, show, targetRef, onAnimationEnd } = useToolTip();

  if (!isOpen) return;

  return (
    <Portal>
      <Popper
        target={targetRef}
        position={position}
        offset={offset}
        render={({ styles, position, ref }) => {
          return (
            <div
              ref={ref}
              className={classNames("rc-tooltip", { show })}
              onAnimationEnd={onAnimationEnd}
              data-arrow={arrow}
              data-position={position}
              style={styles}
            >
              {children}
            </div>
          );
        }}
      />
    </Portal>
  );
};

Tooltip.Toggle = Toggle;
Tooltip.Menu = Menu;

// Tooltip
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

// Tooltip Toggle
Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

// Tooltip Menu
Menu.defaultProps = {
  position: "top",
  arrow: true,
  offset: 10,
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
  ]),
  offset: PropTypes.number,
  arrow: PropTypes.bool,
};
