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
import { CSSTransition } from "react-transition-group";

import "./Tooltip.scss";

const ToolTipContext = createContext();

const useToolTip = () => {
  return useContext(ToolTipContext);
};

export const Tooltip = ({ children }) => {
  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const openToolTip = () => {
    setIsOpen(true);
  };

  const closeToolTip = () => {
    setIsOpen(false);
  };

  return (
    <ToolTipContext.Provider
      value={{
        targetRef,
        isOpen,
        openToolTip,
        closeToolTip,
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
  const { isOpen, targetRef } = useToolTip();

  return (
    <Portal>
      <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
        <Popper
          referenceElement={targetRef}
          position={position}
          offset={offset}
          arrowRect={16}
          arrow={arrow}
          render={({ styles, position, ref }) => {
            return (
              <div className="rc-tooltip">
                <div
                  ref={ref}
                  className="rc-tooltip-menu"
                  data-position={position}
                  style={styles.popper}
                >
                  {children}
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
      </CSSTransition>
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
