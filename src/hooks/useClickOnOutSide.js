export const useOnClickOutSide = (ref, cb) => {
  const observe = () => {
    document.addEventListener("click", handleClickOutSide);
  };

  const unObserve = () => {
    document.removeEventListener("click", handleClickOutSide);
  };

  const handleClickOutSide = ({ target }) => {
    if (ref?.current && !ref.current.contains(target)) {
      unObserve();
      cb();
    }
  };

  return [observe, unObserve];
};
