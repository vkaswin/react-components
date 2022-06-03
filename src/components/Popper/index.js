import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Popper = ({ render, target, position, offset }) => {
  const popper = useRef();

  const [state, setState] = useState({
    styles: { position: "absolute", inset: "0px auto auto 0px" },
    position,
  });

  useLayoutEffect(() => {
    findPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", findPosition);
    return () => window.removeEventListener("resize", findPosition);
  }, []);

  const ref = (element) => {
    popper.current = element;
  };

  const findPosition = () => {
    const ele = target.current.getBoundingClientRect(); //target element

    const ref = popper.current.getBoundingClientRect(); // element to show

    const { innerWidth, innerHeight } = window;

    const canPlaceOnLeft = () => {
      return ele.x > ref.width;
    };

    const canPlaceOnLeftCenter = () => {
      return ele.x > ref.width;
    };

    const canPlaceOnLeftStart = () => {
      return innerHeight - (ele.y + ele.height) > ref.height - ele.height;
    };

    const canPlaceOnLeftEnd = () => {
      return ele.y - ele.height > ref.height - ele.height;
    };

    const canPlaceOnRight = () => {
      return innerWidth - (ele.x + ele.width) > ref.width;
    };

    const canPlaceOnRightCenter = () => {
      let height = (ref.height - ele.height) / 2;
      let bottom = innerHeight - (ele.y + ele.height);
      return ele.y > height && bottom > height;
    };

    const canPlaceOnRightStart = () => {
      return innerHeight - (ele.y + ele.height) > ref.height - ele.height;
    };

    const canPlaceOnRightEnd = () => {
      return ele.y > ref.height - ele.height;
    };

    const canPlaceOnTop = () => {
      return ele.y > ref.height;
    };

    const canPlaceOnTopCenter = () => {
      let width = (ref.width - ele.width) / 2;
      let right = innerWidth - (ele.x + ele.width);
      return ele.x > width && right > width;
    };

    const canPlaceOnTopStart = () => {
      return innerWidth - (ele.x + ele.width) > ref.width - ele.width;
    };

    const canPlaceOnTopEnd = () => {
      return ele.x > ref.width - ele.width;
    };

    const canPlaceOnBottom = () => {
      return innerHeight - (ele.y + ele.height) > ref.height;
    };

    const canPlaceOnBottomCenter = () => {
      let width = (ref.width - ele.width) / 2;
      let right = innerWidth - (ele.x + ele.width);
      return ele.x > width && right > width;
    };

    const canPlaceOnBottomStart = () => {
      return innerWidth - (ele.x + ele.width) > ref.width - ele.width;
    };

    const canPlaceOnBottomEnd = () => {
      return ele.x > ref.width - ele.width;
    };

    const showOnLeftCenter = () => {
      setElementPosition({
        x: ele.x - ref.width - offset,
        y: ele.y - (ref.height / 2 - ele.height / 2),
        position: "left",
      });
    };

    const showOnLeftStart = () => {
      setElementPosition({
        x: ele.x - ref.width - offset,
        y: ele.y,
        position: "left-start",
      });
    };

    const showOnLeftEnd = () => {
      setElementPosition({
        x: ele.x - ref.width - offset,
        y: ele.y - (ref.height - ele.height),
        position: "left-end",
      });
    };

    const showOnRightCenter = () => {
      setElementPosition({
        x: ele.x + ele.width + offset,
        y: ele.y - (ref.height / 2 - ele.height / 2),
        position: "right",
      });
    };

    const showOnRightStart = () => {
      setElementPosition({
        x: ele.x + ele.width + offset,
        y: ele.y,
        position: "right-start",
      });
    };

    const showOnRightEnd = () => {
      setElementPosition({
        x: ele.x + ele.width + offset,
        y: Math.abs(ele.y - (ref.height - ele.height)),
        position: "right-end",
      });
    };

    const showOnTopCenter = () => {
      setElementPosition({
        x: ele.x + (ele.width / 2 - ref.width / 2),
        y: ele.y - (ref.height + offset),
        position: "top",
      });
    };

    const showOnTopStart = () => {
      setElementPosition({
        x: ele.x,
        y: ele.y - (ref.height + offset),
        position: "top-start",
      });
    };

    const showOnTopEnd = () => {
      setElementPosition({
        x: ele.x - (ref.width - ele.width),
        y: ele.y - (ref.height + offset),
        position: "top-end",
      });
    };

    const showOnBottomStart = () => {
      setElementPosition({
        x: ele.x,
        y: ele.y + ele.height + offset,
        position: "bottom-start",
      });
    };

    const showOnBottomEnd = () => {
      setElementPosition({
        x: ele.x - (ref.width - ele.width),
        y: ele.y + ele.height + offset,
        position: "bottom-end",
      });
    };

    const showOnBottomCenter = () => {
      setElementPosition({
        x: ele.x + (ele.width / 2 - ref.width / 2),
        y: ele.y + ele.height + offset,
        position: "bottom",
      });
    };

    const showOnLeft = () => {
      if (canPlaceOnLeft() && canPlaceOnLeftCenter()) {
        showOnLeftCenter();
        return true;
      }

      if (canPlaceOnLeft() && canPlaceOnLeftStart()) {
        showOnLeftStart();
        return true;
      }

      if (canPlaceOnLeft() && canPlaceOnLeftEnd()) {
        showOnLeftEnd();
        return true;
      }
    };

    const showOnRight = () => {
      if (canPlaceOnRight() && canPlaceOnRightCenter()) {
        showOnRightCenter();
        return true;
      }

      if (canPlaceOnRight() && canPlaceOnRightStart()) {
        showOnRightStart();
        return true;
      }

      if (canPlaceOnRight() && canPlaceOnRightEnd()) {
        showOnRightEnd();
        return true;
      }
    };

    const showOnTop = () => {
      if (canPlaceOnTop() && canPlaceOnTopCenter()) {
        showOnTopCenter();
        return true;
      }

      if (canPlaceOnTop() && canPlaceOnTopStart()) {
        showOnTopStart();
        return true;
      }

      if (canPlaceOnTop() && canPlaceOnTopEnd()) {
        showOnTopEnd();
        return true;
      }
    };

    const showOnBottom = () => {
      if (canPlaceOnBottom() && canPlaceOnBottomCenter()) {
        showOnBottomCenter();
        return true;
      }

      if (canPlaceOnBottom() && canPlaceOnBottomStart()) {
        showOnBottomStart();
        return true;
      }

      if (canPlaceOnBottom() && canPlaceOnBottomEnd()) {
        showOnBottomEnd();
        return true;
      }
    };

    const autoPlacement = () => {
      const [placement] = position.split("-");

      if (placement === "left") {
        if (canPlaceOnRight() && showOnRight()) return;
        if (canPlaceOnTop() && showOnTop()) return;
        if (canPlaceOnBottom() && showOnBottom()) return;
      }

      if (placement === "right") {
        if (canPlaceOnLeft() && showOnLeft()) return;
        if (canPlaceOnTop() && showOnTop()) return;
        if (canPlaceOnBottom() && showOnBottom()) return;
      }

      if (placement === "top") {
        if (canPlaceOnBottom() && showOnBottom()) return;
        if (canPlaceOnLeft() && showOnLeft()) return;
        if (canPlaceOnRight() && showOnRight()) return;
      }

      if (placement === "bottom") {
        if (canPlaceOnTop() && showOnTop()) return;
        if (canPlaceOnLeft() && showOnLeft()) return;
        if (canPlaceOnRight() && showOnRight()) return;
      }
    };

    switch (position) {
      case "left":
        if (!(canPlaceOnLeft() && canPlaceOnLeftCenter())) break;
        showOnLeft();
        return;
      case "left-start":
        if (!(canPlaceOnLeft() && canPlaceOnLeftStart())) break;
        showOnLeftStart();
        return;
      case "left-end":
        if (!(canPlaceOnLeft() && canPlaceOnLeftEnd())) break;
        showOnLeftEnd();
        return;
      case "right":
        if (!(canPlaceOnRight() && canPlaceOnRightCenter())) break;
        showOnRight();
        return;
      case "right-start":
        if (!(canPlaceOnRight() && canPlaceOnRightStart())) break;
        showOnRightStart();
        return;
      case "right-end":
        if (!(canPlaceOnRight() && canPlaceOnRightEnd())) break;
        showOnRightEnd();
        return;
      case "top":
        if (!(canPlaceOnTop() && canPlaceOnTopCenter())) break;
        showOnTop();
        return;
      case "top-start":
        if (!(canPlaceOnTop() && canPlaceOnTopStart())) break;
        showOnTopStart();
        return;
      case "top-end":
        if (!(canPlaceOnTop() && canPlaceOnTopEnd())) break;
        showOnTopEnd();
        return;
      case "bottom":
        if (!(canPlaceOnBottom() && canPlaceOnBottomCenter())) break;
        showOnBottom();
        return;
      case "bottom-start":
        if (!(canPlaceOnBottom() && canPlaceOnBottomStart())) break;
        showOnBottomStart();
        return;
      case "bottom-end":
        if (!(canPlaceOnBottom() && canPlaceOnBottomEnd())) break;
        showOnBottomEnd();
        return;
      default:
        return;
    }

    autoPlacement();
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
