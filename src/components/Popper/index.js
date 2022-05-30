import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Popper = ({ render, target, position, offset }) => {
  const popperRef = useRef();

  const [state, setState] = useState({
    styles: { position: "absolute", inset: "0px auto auto 0px" },
    position,
  });

  const { innerWidth, innerHeight } = window;

  useEffect(() => {
    getElementPosition();
  }, []);

  const ref = (element) => {
    popperRef.current = element;
  };

  const getElementPosition = () => {
    const ele = target.current.getBoundingClientRect(); // target element

    const ref = popperRef.current.getBoundingClientRect(); // element to show

    switch (position) {
      case "left":
        if (!canPlaceOnLeft(ele, ref)) break;
        showOnLeft(ele, ref);
        return;
      case "left-start":
        if (!canPlaceOnLeftStart(ele, ref)) break;
        showOnLeftStart(ele, ref);
        return;
      case "left-end":
        if (!canPlaceOnLeftEnd(ele, ref)) break;
        showOnLeftEnd(ele, ref);
        return;
      case "right":
        if (!canPlaceOnRight(ele, ref)) break;
        showOnRight(ele, ref);
        return;
      case "right-start":
        if (!canPlaceOnRightStart(ele, ref)) break;
        showOnRightStart(ele, ref);
        return;
      case "right-end":
        if (!canPlaceOnRightEnd(ele, ref)) break;
        showOnRightEnd(ele, ref);
        return;
      case "top":
        if (!canPlaceOnTop(ele, ref)) break;
        showOnTop(ele, ref);
        return;
      case "top-start":
        if (!canPlaceOnTopStart(ele, ref)) break;
        showOnTopStart(ele, ref);
        return;
      case "top-end":
        if (!canPlaceOnTopEnd(ele, ref)) break;
        showOnTopEnd(ele, ref);
        return;
      case "bottom":
        if (!canPlaceOnBottom(ele, ref)) break;
        showOnBottom(ele, ref);
        return;
      case "bottom-start":
        if (!canPlaceOnBottomStart(ele, ref)) break;
        showOnBottomStart(ele, ref);
        return;
      case "bottom-end":
        if (!canPlaceOnBottomEnd(ele, ref)) break;
        showOnBottomEnd(ele, ref);
        return;
      default:
        return;
    }

    autoPlacement(ele, ref, position);
  };

  const canPlaceOnLeft = (ele, ref) => {
    return ele.x > ref.width;
  };

  const canPlaceOnLeftStart = (ele, ref) => {
    return innerHeight - (ele.y + ele.height) > ref.height - ele.height;
  };

  const canPlaceOnLeftEnd = (ele, ref) => {
    return ele.x > ref.height - ele.height;
  };

  const canPlaceOnRight = (ele, ref) => {
    return innerWidth - (ele.x + ele.width) > ref.width;
  };

  const canPlaceOnRightStart = (ele, ref) => {
    return ele.y > ref.height - ele.height;
  };

  const canPlaceOnRightEnd = (ele, ref) => {
    return ele.y > ref.height - ele.height;
  };

  const canPlaceOnTop = (ele, ref) => {
    return ele.y > ref.height;
  };

  const canPlaceOnTopStart = (ele, ref) => {
    return innerWidth - (ele.x + ele.width) > ref.width - ele.width;
  };

  const canPlaceOnTopEnd = (ele, ref) => {
    return ele.x > ref.width - ele.width;
  };

  const canPlaceOnBottom = (ele, ref) => {
    return innerHeight - (ele.y + ele.height) > ref.height;
  };

  const canPlaceOnBottomStart = (ele, ref) => {
    return innerWidth - (ele.x + ele.width) > ref.width - ele.width;
  };

  const canPlaceOnBottomEnd = (ele, ref) => {
    return ele.x > ref.width - ele.width;
  };

  const showOnLeft = (ele, ref) => {
    setElementPosition({
      x: ele.x - ref.width - offset,
      y: ele.y - (ref.height / 2 - ele.height / 2),
      position: "left",
    });
  };

  const showOnLeftStart = (ele, ref) => {
    setElementPosition({
      x: ele.x - ref.width - offset,
      y: ele.y,
      position: "left-start",
    });
  };

  const showOnLeftEnd = (ele, ref) => {
    setElementPosition({
      x: ele.x - ref.width - offset,
      y: ele.y - (ref.height - ele.height),
      position: "left-end",
    });
  };

  const showOnRight = (ele, ref) => {
    setElementPosition({
      x: ele.x + ele.width + offset,
      y: ele.y - (ref.height / 2 - ele.height / 2),
      position: "right",
    });
  };

  const showOnRightStart = (ele, ref) => {
    setElementPosition({
      x: ele.x + ele.width + offset,
      y: ele.y,
      position: "right-start",
    });
  };

  const showOnRightEnd = (ele, ref) => {
    setElementPosition({
      x: ele.x + ele.width + offset,
      y: Math.abs(ele.y - (ref.height - ele.height)),
      position: "right-end",
    });
  };

  const showOnTop = (ele, ref) => {
    setElementPosition({
      x: ele.x + (ele.width / 2 - ref.width / 2),
      y: ele.y - (ref.height + offset),
      position: "top",
    });
  };

  const showOnTopStart = (ele, ref) => {
    setElementPosition({
      x: ele.x,
      y: ele.y - (ref.height + offset),
      position: "top-start",
    });
  };

  const showOnTopEnd = (ele, ref) => {
    setElementPosition({
      x: ele.x - (ref.width - ele.width),
      y: ele.y - (ref.height + offset),
      position: "top-end",
    });
  };

  const showOnBottomStart = (ele, ref) => {
    setElementPosition({
      x: ele.x,
      y: ele.y + ele.height + offset,
      position: "bottom-start",
    });
  };

  const showOnBottomEnd = (ele, ref) => {
    setElementPosition({
      x: ele.x - (ref.width - ele.width),
      y: ele.y + ele.height + offset,
      position: "bottom-end",
    });
  };

  const showOnBottom = (ele, ref) => {
    setElementPosition({
      x: ele.x + (ele.width / 2 - ref.width / 2),
      y: ele.y + ele.height + offset,
      position: "bottom",
    });
  };

  const autoPlacement = (ele, ref, position) => {
    const [placement] = position.split("-");

    if (placement === "left") {
      if (canPlaceOnRight(ele, ref)) {
        showOnRight(ele, ref);
        return;
      }

      if (canPlaceOnRightStart(ele, ref)) {
        showOnRightStart(ele, ref);
        return;
      }

      if (canPlaceOnRightEnd(ele, ref)) {
        showOnRightEnd(ele, ref);
        return;
      }
    }

    if (placement === "right") {
      if (canPlaceOnLeft(ele, ref)) {
        showOnLeft(ele, ref);
        return;
      }

      if (canPlaceOnLeftStart(ele, ref)) {
        showOnLeftStart(ele, ref);
        return;
      }

      if (canPlaceOnLeftEnd(ele, ref)) {
        showOnLeftEnd(ele, ref);
        return;
      }
    }

    if (placement === "top") {
      if (canPlaceOnBottom(ele, ref)) {
        showOnBottom(ele, ref);
        return;
      }

      if (canPlaceOnBottomStart(ele, ref)) {
        showOnBottomStart(ele, ref);
        return;
      }

      if (canPlaceOnBottomEnd(ele, ref)) {
        showOnBottomEnd(ele, ref);
        return;
      }
    }

    if (placement === "bottom") {
      if (canPlaceOnTop(ele, ref)) {
        showOnTop(ele, ref);
        return;
      }

      if (canPlaceOnTopStart(ele, ref)) {
        showOnTopStart(ele, ref);
        return;
      }

      if (canPlaceOnTopEnd(ele, ref)) {
        showOnTopEnd(ele, ref);
        return;
      }
    }
  };

  const setElementPosition = ({ x, y, position }) => {
    setState({
      ...state,
      styles: {
        ...state.styles,
        transform: `translate(${x}px,${y}px`,
      },
      position,
    });
  };

  return render({ ...state, ref });
};

Popper.propTypes = {
  render: PropTypes.func.isRequired,
  target: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
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
};

Popper.defaultProps = {
  offset: 5,
};
