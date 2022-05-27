import React, { useEffect, useState } from "react";
import { Portal, Overlay } from "components";
import { classNames } from "utils";
import PropTypes from "prop-types";

import "./Modal.scss";

export const Modal = ({ isOpen, toggle, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setShow(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = ({ animationName }) => {
    if (
      animationName == "rc_slideOutTop" ||
      animationName == "rc_slideOutBottom"
    ) {
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <Portal>
      <div>
        <div
          className={classNames("rc-modal", { show: isOpen })}
          onClick={() => {
            isOpen && toggle();
          }}
        >
          <div
            className={classNames("rc-modal-dialog")}
            onAnimationEnd={handleAnimationEnd}
          >
            <div
              className="rc-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </div>
        <Overlay isOpen={isOpen} toggle={toggle} zIndex={1049} portal={false} />
      </div>
    </Portal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: false,
  toggle: () => {},
};
