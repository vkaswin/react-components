import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useWindowSize } from "hooks";

export const Popper = ({ render, target, position, offset }) => {
  const [state, setState] = useState({
    styles: { position: "absolute", inset: "0px auto auto 0px" },
    attributes: {},
  });

  const { innerWidth, innerHeight } = window;

  useEffect(() => {
    getElementPosition();
    window.addEventListener("resize", getElementPosition);
    return () => window.removeEventListener("resize", getElementPosition);
  }, []);

  const getElementPosition = () => {
    const ele = target.current.getBoundingClientRect(); // target element

    const ref = render(state).ref.current.getBoundingClientRect(); // element to show

    const [prefix, suffix = prefix] = position.split("-");

    switch (prefix) {
      case "left":
        if (
          !(
            ele.x > ref.width &&
            (innerHeight - (ele.y + ele.height) > ref.height - ele.height ||
              ele.x > ref.height - ele.height ||
              (ele.y > ref.height / 4 &&
                innerHeight - (ele.y + ele.height) > ref.height / 4))
          )
        )
          return;

        switch (suffix) {
          case "left":
            updateValue({
              x: ele.x - ref.width - offset,
              y: ele.y - (ref.height / 2 - ele.height / 2),
              position: "left",
            });
            return;
          case "start":
            updateValue({
              x: ele.x - ref.width - offset,
              y: ele.y,
              position: "left-start",
            });
            return;
          case "end":
            updateValue({
              x: ele.x - ref.width - offset,
              y: ele.y - (ref.height - ele.height),
              position: "left-end",
            });
            return;
          default:
            return;
        }
      case "right":
        switch (suffix) {
          case "right":
            updateValue({
              x: ele.x + ele.width + offset,
              y: ele.y - (ref.height / 2 - ele.height / 2),
              position: "right",
            });
            return;
          case "start":
            updateValue({
              x: ele.x + ele.width + offset,
              y: ele.y,
              position: "right-start",
            });
            return;
          case "end":
            updateValue({
              x: ele.x + ele.width + offset,
              y: ele.y - ele.height,
              position: "right-end",
            });
            return;
          default:
            return;
        }

      case "top":
        switch (suffix) {
          case "top":
            updateValue({
              x: ele.x + (ele.width / 2 - ref.width / 2),
              y: ele.y - (ref.height + offset),
              position: "top",
            });
            return;
          case "start":
            updateValue({
              x: ele.x,
              y: ele.y - (ref.height + offset),
              position: "top-start",
            });
            return;
          case "end":
            updateValue({
              x: ele.x - (ref.width - ele.width),
              y: ele.y - (ref.height + offset),
              position: "top-end",
            });
            return;
          default:
            return;
        }

      case "bottom":
        switch (suffix) {
          case "bottom":
            updateValue({
              x: ele.x + (ele.width / 2 - ref.width / 2),
              y: ele.y + ele.height + offset,
              position: "bottom",
            });
            return;
          case "start":
            updateValue({
              x: ele.x,
              y: ele.y + ele.height + offset,
              position: "bottom-start",
            });
            return;
          case "end":
            updateValue({
              x: ele.x - (ref.width - ele.width),
              y: ele.y + ele.height + offset,
              position: "bottom-end",
            });
            return;
          default:
            return;
        }

      default:
        return;
    }
  };

  const updateValue = ({ x, y, position }) => {
    setState({
      ...state,
      styles: {
        ...state.styles,
        transform: `translate(${x}px,${y}px`,
      },
      attributes: { "data-position": position },
    });
  };

  return render(state);
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
