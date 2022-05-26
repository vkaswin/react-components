export const positionElement = ({ parent, child, position, offset }) => {
  let { innerWidth, innerHeight } = window;

  let { x, y, height, width } = parent.getBoundingClientRect();

  let { width: clientWidth, height: clientHeight } =
    child.getBoundingClientRect();

  let hasSpaceOnTop = y > clientHeight + offset;
  let hasSpaceOnBottom = innerHeight - (y + height) > clientHeight + offset;
  let hasSpaceOnLeft = x > clientWidth + offset;
  let hasSpaceOnRight = innerWidth - (x + width) > clientWidth + offset;

  let prefix = String(position).split("-")[0];
  let suffix = String(position).split("-")[1];

  let finalPosition = prefix;

  switch (prefix) {
    case "top":
      if (!hasSpaceOnTop && hasSpaceOnBottom) {
        finalPosition = "bottom";
      }
      break;
    case "bottom":
      if (!hasSpaceOnBottom && hasSpaceOnTop) {
        finalPosition = "top";
      }
      break;
    case "left":
      if (!hasSpaceOnLeft && hasSpaceOnRight) {
        finalPosition = "right";
      }
      break;
    case "right":
      if (!hasSpaceOnTop && hasSpaceOnLeft) {
        finalPosition = "left";
      }
      break;
    default:
      return;
  }

  child.setAttribute("data-position", `${finalPosition}-${suffix}`);

  switch (finalPosition) {
    case "top":
      child.style.removeProperty("left");
      child.style.top = `-${clientHeight + offset}px`;
      break;
    case "bottom":
      child.style.removeProperty("left");
      child.style.top = `${height + offset}px`;
      break;
    case "left":
      child.style.removeProperty("top");
      child.style.left = `-${clientWidth + offset}px`;
      break;
    case "right":
      child.style.removeProperty("top");
      child.style.left = `${width + offset}px`;
      break;
    default:
      return;
  }
  child.setAttribute("data-position", `${finalPosition}-${suffix}`);
};

// export const positionElement = ({ parent, child, position, offset }) => {
//   let { innerWidth, innerHeight } = window;

//   let { x, y, height, width } = parent.getBoundingClientRect();

//   let { width: clientWidth, height: clientHeight } =
//     child.getBoundingClientRect();

//   child.removeAttribute("style");

//   let placement = String(position).split("-")[0];

//   const handleTop = () => {
//     let placement = String(position).split("-")[1];
//     switch (placement) {
//       case "start":
//         if (innerWidth - x > clientWidth) {
//           child.setAttribute("data-position", "top-start");
//           child.style.top = `-${clientHeight + offset}px`;
//         }
//         break;
//       case "center":
//         if (innerWidth - x > clientWidth + clientWidth / 2) {
//           child.setAttribute("data-position", "top-center");
//           child.style.top = `-${clientHeight + offset}px`;
//         }
//         break;
//       case "end":
//         if (x + width > clientWidth) {
//           child.setAttribute("data-position", "top-end");
//           child.style.top = `-${clientHeight + offset}px`;
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const handleBottom = () => {
//     let placement = String(position).split("-")[1];
//     switch (placement) {
//       case "start":
//         if (innerWidth - x > clientWidth) {
//           child.setAttribute("data-position", "bottom-start");
//           child.style.top = `${height + offset}px`;
//         }
//         break;
//       case "center":
//         if (innerWidth - x > clientWidth + clientWidth / 2) {
//           child.setAttribute("data-position", "bottom-center");
//           child.style.top = `${height + offset}px`;
//         }
//         break;
//       case "end":
//         if (x + width > clientWidth) {
//           child.setAttribute("data-position", "bottom-end");
//           child.style.top = `${height + offset}px`;
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const handleLeft = () => {
//     let placement = String(position).split("-")[1];

//     switch (placement) {
//       case "start":
//         if (y > clientWidth - width) {
//           child.setAttribute("data-position", "left-start");
//           child.style.left = `-${clientWidth + offset}px`;
//         }
//         break;
//       case "center":
//         if (x > clientWidth && innerHeight - y > clientHeight - height) {
//           child.setAttribute("data-position", "left-center");
//           child.style.left = `-${clientWidth + offset}px`;
//         }
//         break;
//       case "end":
//         if (x > clientWidth) {
//           child.setAttribute("data-position", "left-end");
//           child.style.left = `-${clientWidth + offset}px`;
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const handleRight = () => {
//     let placement = String(position).split("-")[1];

//     switch (placement) {
//       case "start":
//         if (y > clientWidth - width) {
//           child.setAttribute("data-position", "right-start");
//           child.style.left = `${width + offset}px`;
//         }
//         break;
//       case "center":
//         if (innerWidth - (x + width) > clientHeight) {
//           child.setAttribute("data-position", "right-center");
//           child.style.left = `${width + offset}px`;
//         }
//         break;
//       case "end":
//         if (innerHeight - (y + height) > clientHeight - height) {
//           child.setAttribute("data-position", "right-end");
//           child.style.left = `${width + offset}px`;
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   switch (placement) {
//     case "top":
//       if (y > clientHeight + offset) {
//         handleTop();
//       } else {
//         handleBottom();
//       }
//       break;
//     case "bottom":
//       if (innerHeight - (y + height) > clientHeight + offset) {
//         handleBottom();
//       } else {
//         handleTop();
//       }
//       break;
//     case "left":
//       if (x > clientWidth + offset) {
//         handleLeft();
//       } else {
//         handleRight();
//       }
//       break;
//     case "right":
//       if (innerWidth - (x + width) > clientWidth + offset) {
//         handleRight();
//       } else {
//         handleLeft();
//       }
//       break;
//     default:
//       break;
//   }
// };
