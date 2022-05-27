import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Fragment } from "react";

export const Portal = ({ children }) => {
  return (
    <Fragment>
      {portal ? createPortal(children, document.body) : children}
    </Fragment>
  );
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  portal: PropTypes.bool,
};

Portal.defaultProps = {
  portal: true,
};
