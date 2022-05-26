import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export const Portal = ({ children, portal }) => {
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
