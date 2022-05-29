import { useEffect, useState } from "react";

export const usePopper = ({
  reference,
  element,
  position,
  offset,
  isVisible,
}) => {
  const [state, setState] = useState({ styles: {}, attributes: {} });

  return { styles: state.styles, attributes: state.attributes };
};
