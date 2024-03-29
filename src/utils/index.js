import { Toast } from "components/Toast";

//? Toast
export const toast = ({ type, message, delay, position, closeIcon }) => {
  Toast({
    type,
    message,
    delay,
    position,
    closeIcon,
  });
};

//? Debounce
export const debounce = (fn, delay) => {
  let timeoutID;
  return (...args) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const throttle = (fn, delay) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
};

// const throttle = (func, limit) => {
//     let lastFunc;
//     let lastRan;
//     return function() {
//       const context = this;
//       const args = arguments;
//       if (!lastRan) {
//         func.apply(context, args)
//         lastRan = Date.now();
//       } else {
//         clearTimeout(lastFunc);
//         lastFunc = setTimeout(function() {
//             if ((Date.now() - lastRan) >= limit) {
//               func.apply(context, args);
//               lastRan = Date.now();
//             }
//          }, limit - (Date.now() - lastRan));
//       }
//     }
//   }

//? Cookies
export const setCookie = ({ name, value, days }) => {
  let expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "; expires=" + expireDate.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
};

export const getCookie = (name) => {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

  return match ? match[2] : null;
};

export const clearCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

//? URL Query
export const parseQuery = (query = "") => {
  if (query.length == 0) return {};

  return query
    .substring(1)
    .split("&")
    .reduce((initial, str) => {
      const [key, value] = str.split("=");
      return { ...initial, [key]: value };
    }, {});
};

export const stringifyQuery = (query = {}) => {
  return Object.entries(query)
    .reduce(
      (initial, [key, value]) =>
        `${initial}${
          typeof value !== "undefined" && value !== null
            ? `${key}=${value}&`
            : ""
        }`,
      "?"
    )
    .slice(0, -1);
};

//? ClassNames
export const classNames = (...args) => {
  return String(
    args.reduce((initial, className) => {
      if (typeof className === "string") {
        return `${initial} ${className}`;
      }

      const type = getDateType(className);

      if (type === "object") {
        return Object.entries(className)
          .filter(([_, value]) => Boolean(value))
          .reduce((initial, [key, _]) => `${initial} ${key}`, initial);
      }

      return initial;
    }, "")
  ).trim();
};

//? Check Data Type
export const getDateType = (data) => {
  if (typeof data !== "object") {
    return typeof data;
  }

  return Object.prototype.toString
    .call(data)
    .toLowerCase()
    .replace(/^\[object (\S+)\]$/, "$1");
};

export const clickOutside = ({ ref, onClose, doNotClose = () => false }) => {
  if (!ref) return;

  const handleClickOutside = ({ target }) => {
    if (ref.contains(target) || doNotClose(target)) return;
    onClose();
    document.removeEventListener("click", handleClickOutside);
  };

  document.addEventListener("click", handleClickOutside);
};

export const fileType = (fileName) => {
  return String(fileName).split(".")[String(fileName).split(".").length - 1];
};

export const isLeapYear = (year) => {
  return new Date(year, 1, 29).getDate() === 29;
};

//? Select a random element in an array
const getRandomElement = (array) => {
  if (!Array.isArray(array)) return;

  return Math.floor(Math.random() * array.length);
};

//? Sort by name
const sortData = dataSet.sort((curr, prev) => {
  return curr.label.localeCompare(prev.label);
});

//? Infinite scroll using onScroll event
//? Note: window.addEventListener("scroll") if height is not defined or use onScroll event
const handleScroll = ({
  target: {
    scrollingElement: { clientHeight, scrollTop, scrollHeight },
  },
}) => {
  if (scrollHeight - scrollTop === clientHeight) {
    console.log("reached end");
  }
};

//? Generate unique id
const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

//? Get day by date
const getDayByDate = ({ year, month, day }) => {
  return new Date(year, month, day).toLocaleDateString("en-us", {
    weekday: "long",
  });
};

//? Trigger events manually
const triggerOnChange = (node, value = "") => {
  const setValue = Object.getOwnPropertyDescriptor(node.__proto__, "value").set;
  const event = new Event("input", { bubbles: true });
  setValue.call(node, value);
  node.dispatchEvent(event);
};

const shuffleArray = (array) => {
  if (!Array.isArray(array)) return;
  let arr = [...array];
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
