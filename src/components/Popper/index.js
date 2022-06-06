import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { PopperPlacements } from "utils/constants";

export const Popper = ({ render, target, position, offset }) => {
  const reference = useRef();

  const [state, setState] = useState({
    styles: { position: "absolute", inset: "0px auto auto 0px" },
    position,
  });

  useLayoutEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getCoordinates);
    return () => window.removeEventListener("resize", getCoordinates);
  }, []);

  const ref = (element) => {
    reference.current = element;
  };

  const getCoordinates = () => {
    const element = target.current.getBoundingClientRect();

    const popper = reference.current.getBoundingClientRect();

    const [placement] = position.split("-");

    const { innerWidth, innerHeight } = window;

    const canPlaceOnLeft = () => {
      return element.x + offset > popper.width;
    };

    const canPlaceOnLeftCenter = () => {
      let height = (popper.height - element.height) / 2;
      let bottom = innerHeight - (element.y + element.height);
      return element.y > height && bottom > height;
    };

    const canPlaceOnLeftStart = () => {
      return (
        innerHeight - (element.y + element.height) >
        popper.height - element.height
      );
    };

    const canPlaceOnLeftEnd = () => {
      return element.y - element.height > popper.height - element.height;
    };

    const canPlaceOnRight = () => {
      return innerWidth - (element.x + element.width + offset) > popper.width;
    };

    const canPlaceOnRightCenter = () => {
      let height = (popper.height - element.height) / 2;
      let bottom = innerHeight - (element.y + element.height);
      return element.y > height && bottom > height;
    };

    const canPlaceOnRightStart = () => {
      return (
        innerHeight - (element.y + element.height) >
        popper.height - element.height
      );
    };

    const canPlaceOnRightEnd = () => {
      return element.y > popper.height - element.height;
    };

    const canPlaceOnTop = () => {
      return element.y + offset > popper.height;
    };

    const canPlaceOnTopCenter = () => {
      let width = (popper.width - element.width) / 2;
      let right = innerWidth - (element.x + element.width);
      return element.x > width && right > width;
    };

    const canPlaceOnTopStart = () => {
      return (
        innerWidth - (element.x + element.width) > popper.width - element.width
      );
    };

    const canPlaceOnTopEnd = () => {
      return element.x > popper.width - element.width;
    };

    const canPlaceOnBottom = () => {
      return (
        innerHeight - (element.y + element.height + offset) > popper.height
      );
    };

    const canPlaceOnBottomCenter = () => {
      let width = (popper.width - element.width) / 2;
      let right = innerWidth - (element.x + element.width);
      return element.x > width && right > width;
    };

    const canPlaceOnBottomStart = () => {
      return (
        innerWidth - (element.x + element.width) > popper.width - element.width
      );
    };

    const canPlaceOnBottomEnd = () => {
      return element.x > popper.width - element.width;
    };

    const getPosition = () => {
      switch (placement) {
        case "left":
          return canPlaceOnLeft() ? ["left"] : [];
        case "right":
          return canPlaceOnRight() ? ["right"] : [];
        case "top":
          return canPlaceOnTop() ? ["top"] : [];
        case "bottom":
          return canPlaceOnBottom() ? ["bottom"] : [];
        default:
          return [];
      }
    };

    const getOppositePosition = () => {
      switch (placement) {
        case "left":
          return canPlaceOnRight() ? ["right"] : [];
        case "right":
          return canPlaceOnLeft() ? ["left"] : [];
        case "top":
          return canPlaceOnBottom() ? ["bottom"] : [];
        case "bottom":
          return canPlaceOnTop() ? ["top"] : [];
        default:
          return [];
      }
    };

    const getAdjacentSides = () => {
      if (placement === "left" || placement === "right") {
        return [
          ...(canPlaceOnTop() ? ["top"] : []),
          ...(canPlaceOnBottom() ? ["bottom"] : []),
        ];
      }
      if (placement === "top" || placement === "bottom") {
        return [
          ...(canPlaceOnLeft() ? ["left"] : []),
          ...(canPlaceOnRight() ? ["right"] : []),
        ];
      }
    };

    const findCoordianteByPosition = {
      "left-center": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftCenter())) return false;
        return {
          x: element.x - popper.width - offset,
          y: element.y - (popper.height / 2 - element.height / 2),
        };
      },
      "left-start": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftStart())) return false;
        return {
          x: element.x - popper.width - offset,
          y: element.y,
        };
      },
      "left-end": () => {
        if (!(canPlaceOnLeft() && canPlaceOnLeftEnd())) return false;
        return {
          x: element.x - popper.width - offset,
          y: element.y - (popper.height - element.height),
        };
      },
      "right-center": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightCenter())) return false;
        return {
          x: element.x + element.width + offset,
          y: element.y - (popper.height / 2 - element.height / 2),
        };
      },
      "right-start": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightStart())) return false;
        return {
          x: element.x + element.width + offset,
          y: element.y,
        };
      },
      "right-end": () => {
        if (!(canPlaceOnRight() && canPlaceOnRightEnd())) return false;
        return {
          x: element.x + element.width + offset,
          y: element.y - (popper.height - element.height),
        };
      },
      "top-center": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopCenter())) return false;
        return {
          x: element.x + (element.width / 2 - popper.width / 2),
          y: element.y - (popper.height + offset),
        };
      },
      "top-start": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopStart())) return false;
        return {
          x: element.x,
          y: element.y - (popper.height + offset),
        };
      },
      "top-end": () => {
        if (!(canPlaceOnTop() && canPlaceOnTopEnd())) return false;
        return {
          x: element.x - (popper.width - element.width),
          y: element.y - (popper.height + offset),
        };
      },
      "bottom-center": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomCenter())) return false;
        return {
          x: element.x + (element.width / 2 - popper.width / 2),
          y: element.y + element.height + offset,
        };
      },
      "bottom-start": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomStart())) return false;
        return {
          x: element.x,
          y: element.y + element.height + offset,
        };
      },
      "bottom-end": () => {
        if (!(canPlaceOnBottom() && canPlaceOnBottomEnd())) return false;
        return {
          x: element.x - (popper.width - element.width),
          y: element.y + element.height + offset,
        };
      },
    };

    const autoPlacement = () => {
      const posiblePositions = [
        ...getPosition(),
        ...getOppositePosition(),
        ...getAdjacentSides(),
      ];

      let coordinates = null;

      posiblePositions
        .reduce((initial, placement) => {
          return [
            ...initial,
            ...Object.entries(findCoordianteByPosition).filter(
              ([key]) => key !== position && placement === key.split("-")[0]
            ),
          ];
        }, [])
        .some(([key, func]) => {
          let coord = func();
          if (coord) {
            coordinates = { ...coord, placement: key };
            return true;
          }
          return false;
        });

      if (coordinates) {
        setCoordinate(coordinates);
      } else {
        defaultPlacement();
      }
    };

    const defaultPlacement = () => {
      setCoordinate({
        x: element.x,
        y: element.y + element.height + offset,
        placement: "bottom-start",
        width: innerWidth - element.x - 15,
      });
    };

    const coordinates = findCoordianteByPosition[position]();

    if (coordinates) {
      setCoordinate(coordinates);
    } else {
      autoPlacement();
    }
  };

  const setCoordinate = ({ x, y, placement, width }) => {
    setState({
      ...state,
      styles: {
        ...state.styles,
        transform: `translate(${x}px,${y}px`,
        ...(width && { width: `${width}px` }),
      },
      position: placement ?? position,
    });
  };

  return render({ ...state, ref });
};

Popper.propTypes = {
  render: PropTypes.func.isRequired,
  target: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  position: PropTypes.oneOf(PopperPlacements),
  offset: PropTypes.number,
};

Popper.defaultProps = {
  offset: 5,
};
