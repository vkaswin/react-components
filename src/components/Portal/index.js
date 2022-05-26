import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export const Portal = ({ children, node }) => {
  return createPortal(children, node);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.instanceOf(Element),
};

Portal.defaultProps = {
  node: document.getElementById("root") ?? document.body,
};
