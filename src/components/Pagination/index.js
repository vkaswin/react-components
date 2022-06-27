import React, { useEffect, useState } from "react";

import "./Pagination.scss";

const dot = <i className="fas fa-ellipsis-h"></i>;

export const Pagination = ({ activePage, totalPages, onPageChange }) => {
  const [pageList, setPageList] = useState([]);

  const pages = Array.from(Array(totalPages), (_, index) => {
    return index + 1;
  });

  useEffect(() => {
    if (activePage + 2 == 3) {
      setPageList([
        ...pages.slice(0, 3),
        ...pages.slice(3, 5),
        null,
        ...pages.slice(-3),
      ]);
    } else if (activePage > 6 && activePage < pages - 3) {
      setPageList([
        ...pages.slice(0, 3),
        null,
        ...pages.slice(activePage - 2, activePage + 1),
        null,
        ...pages.slice(-3),
      ]);
    } else {
      setPageList([...pages.slice(0, 3), null, ...pages.slice(-3)]);
    }
  }, [activePage, totalPages]);

  const handleNext = () => {
    if (activePage > totalPages) return;
    onPageChange(activePage + 1);
  };

  const handlePrevious = () => {
    if (activePage <= 1) return;
    onPageChange(activePage - 1);
  };

  const handlePageChange = (page) => () => {
    if (page) {
      onPageChange(page);
      return;
    }
    onPageChange(activePage + 2);
  };

  return (
    <div className="rc-pagination">
      <button
        className="pagination-prev"
        onClick={handlePrevious}
        disabled={activePage === 1}
      >
        <i className="fas fa-chevron-left"></i>
        <label>Prev</label>
      </button>
      {pageList.map((page, index) => {
        return (
          <button
            key={index}
            className={activePage === page ? "page-btn active" : "page-btn"}
            onClick={handlePageChange(page)}
          >
            {page ? page : dot}
          </button>
        );
      })}
      <button
        className="pagination-next"
        onClick={handleNext}
        disabled={activePage === pages.length}
      >
        <label>Next</label>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
