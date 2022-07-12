import React, {
  createContext,
  Fragment,
  useContext,
  useRef,
  useState,
} from "react";
import { Popper, Portal } from "components";
import PropTypes from "prop-types";
import { classNames } from "utils";
import { PopperPlacements } from "utils/constants";

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

const Menu = ({ children, position, arrow, offset, className }) => {
  const { isOpen, show, targetRef, onAnimationEnd } = useToolTip();

  if (!isOpen) return;

  return (
    <Portal>
      <Popper
        referenceElement={targetRef}
        position={position}
        offset={offset}
        arrowRect={16}
        arrow={arrow}
        render={({ styles, position, ref }) => {
          return (
            <div>
              <div
                ref={ref}
                className={classNames("rc-tooltip", {
                  show: show,
                })}
                onAnimationEnd={onAnimationEnd}
                data-arrow={arrow}
                data-position={position}
                style={styles.popper}
              >
                <div
                  className={classNames("rc-tooltip-content", {
                    [className]: className,
                  })}
                >
                  {children}
                </div>
              </div>
              {arrow && (
                <div
                  className="rc-tooltip-arrow"
                  style={styles.arrow}
                  data-position={position}
                ></div>
              )}
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
  position: "top-center",
  arrow: true,
  offset: 10,
  className: null,
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(PopperPlacements),
  offset: PropTypes.number,
  arrow: PropTypes.bool,
  className: PropTypes.string,
};
