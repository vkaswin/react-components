import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { debounce } from "utils";

import "./ScrollableTab.scss";

export const ScrollableTab = ({
  options,
  indicator = true,
  indicatorColor = "#1976d2",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [scrollRight, setScrollRight] = useState(0);

  const scrollRef = useRef();

  const nextRef = useRef();

  const prevRef = useRef();

  const indicatorRef = useRef();

  useLayoutEffect(() => {
    indicatorRef.current.style.width = `${scrollRef.current?.children[activeIndex].offsetWidth}px`;
    indicatorRef.current.style.left = `${scrollRef.current?.children[activeIndex].offsetLeft}px`;
  }, [activeIndex]);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    let visibleElements = getVisibleElements();
    let {
      dataset: { index: lastIndex },
    } = visibleElements[visibleElements.length - 1];
    let {
      dataset: { index: firstIndex },
    } = visibleElements[0];
    if (lastIndex < options.length - 1) {
      let { offsetLeft } = scrollRef.current.children[lastIndex];
      nextRef.current.hidden = false;
      setScrollLeft(offsetLeft);
    } else {
      nextRef.current.hidden = true;
    }
    if (firstIndex > 0) {
      let { offsetLeft } = scrollRef.current.children[firstIndex];
      prevRef.current.hidden = false;
      setScrollRight(offsetLeft);
    } else {
      prevRef.current.hidden = true;
    }
  };

  const getVisibleElements = () => {
    let childrens = [...scrollRef.current?.children];
    return childrens.filter((list) => {
      let { top, left, right, bottom } = list.getBoundingClientRect();
      let { innerWidth, innerHeight } = window;
      let {
        dataset: { index },
      } = list;
      return (
        top >= 0 &&
        left >= 0 &&
        right <= innerWidth &&
        bottom <= innerHeight &&
        index
      );
    });
  };

  const handlePrevious = () => {
    scrollRef.current.scrollTo({
      left: scrollRight - scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    scrollRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
    scrollRef.current?.children[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scrollable-tab-container">
      <div className="scroll-arrow">
        <i
          ref={prevRef}
          className="fas fa-chevron-left"
          onClick={handlePrevious}
        ></i>
      </div>
      <div
        ref={scrollRef}
        className="scrollable-tab-wrapper"
        onScroll={debounce(handleScroll, 100)}
      >
        {options.map((list, index) => {
          return (
            <button
              key={index}
              data-index={index}
              className={activeIndex === index ? "active-tab" : "inactive-tab"}
              onClick={() => handleFocus(index)}
            >
              {list}
            </button>
          );
        })}
        {indicator && (
          <div
            id="scrollbar-indicator"
            ref={indicatorRef}
            className="scrollable-tab-indicator"
            style={{
              "--scrollIndicator-color": `${indicatorColor}`,
            }}
          ></div>
        )}
      </div>
      <div className="scroll-arrow" ref={nextRef}>
        <i className="fas fa-chevron-right" onClick={handleNext}></i>
      </div>
    </div>
  );
};
