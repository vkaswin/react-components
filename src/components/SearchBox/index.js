import React, { useEffect, useRef, useState } from "react";

import "./SearchBox.scss";

const SearchBox = ({
  placeholder = "Search here",
  inputValue = "",
  onChange,
  onSearch,
  isAutoFoucs = false,
  overlay = false,
  isActive = null,
  onEnter = null,
  children,
}) => {
  let [, setState] = useState();
  let [isOpen, setIsOpen] = useState(false);
  let [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let searchRef = useRef(null);

  let searchResultRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleChange = async (e) => {
    await onChange(e.target.value);
    setState(Math.random());
  };

  const handleSearch = () => {
    onSearch();
  };

  useEffect(() => {
    searchResultRef.current.scrollTo({
      top: searchResultRef.current.children[activeIndex]?.offsetTop,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (activeIndex < children.length) {
        isActive(activeIndex + 1);
        setActiveIndex(activeIndex + 1);
      }
    }
    if (e.key === "ArrowUp") {
      if (activeIndex > 1) {
        isActive(activeIndex - 1);
        setActiveIndex(activeIndex - 1);
      }
    }
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <>
      <div className="search-box-container" ref={searchRef}>
        <input
          className="search-input"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyUp={handleKeyDown}
          autoFocus={isAutoFoucs}
        />
        <i className="fa fa-search" onClick={() => handleSearch()}></i>
        <div
          className="search-result-box"
          ref={searchResultRef}
          style={{ opacity: isOpen && inputValue !== "" ? "1" : "0" }}
        >
          {children}
        </div>
      </div>
      {overlay && inputValue !== "" && (
        <div
          className="search-overlay"
          style={{ display: isOpen ? "block" : "none" }}
        ></div>
      )}
    </>
  );
};

export default SearchBox;
