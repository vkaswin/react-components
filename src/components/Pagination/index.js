import React, { useEffect, useState } from "react";

import "./Pagination.scss";

export const Pagination = ({ activePage, totalPages, onPageChange }) => {
  const pages = [];

  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }

  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    if (activePage < 5) {
      setPageList([
        ...pages.splice(0, activePage >= 3 ? activePage + 1 : 3),
        "...",
        ...pages.splice(pages.length - 3, pages.length),
      ]);
    } else if (activePage > pages.length - 4) {
      setPageList([
        ...pages.splice(0, 3),
        "...",
        ...pages.splice(pages.length - 5, pages.length),
      ]);
    } else {
      setPageList([
        ...pages.splice(0, 3),
        "...",
        activePage - 1,
        activePage,
        activePage + 1,
        "...",
        ...pages.splice(pages.length - 3, pages.length),
      ]);
    }
  }, [activePage, totalPages]);

  const handleNext = () => {
    if (activePage < totalPages) {
      onPageChange(activePage + 1);
    }
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      onPageChange(activePage - 1);
    }
  };

  const handlePageChange = (page, index) => {
    if (activePage !== page) {
      if (typeof page === "number") {
        onPageChange(page);
      } else {
        const dot = pageList.filter((list) => {
          return list === "...";
        });
        if (dot.length === 1) {
          if (pages.length - 3 <= activePage) {
            onPageChange(activePage - 2);
          } else {
            onPageChange(activePage + 2);
          }
        } else {
          if (index === 3) {
            onPageChange(activePage - 2);
          } else {
            onPageChange(activePage + 2);
          }
        }
      }
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-prev"
        onClick={() => handlePrevious()}
        disabled={activePage === 1}
      >
        <i className="fas fa-chevron-left"></i>
        <label>Prev</label>
      </button>
      {pageList.map((list, index) => {
        return (
          <button
            key={index}
            className={activePage === list ? "page-btn active" : "page-btn"}
            onClick={() => handlePageChange(list, index)}
          >
            {list}
          </button>
        );
      })}
      <button
        className="pagination-next"
        onClick={() => handleNext()}
        disabled={activePage === pages.length}
      >
        <label>Next</label>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
