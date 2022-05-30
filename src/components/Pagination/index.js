import React, { useEffect, useState } from "react";

import "./Pagination.scss";

const dot = <i className="fas fa-ellipsis-h"></i>;

export const Pagination = ({ activePage, totalPages, onPageChange }) => {
  const [pageList, setPageList] = useState([]);

  const pages = Array.from(Array(totalPages), (_, index) => {
    return index + 1;
  });

  useEffect(() => {
    setPageList([...pages.slice(0, 3), dot, ...pages.slice(-3)]);
  }, [activePage, totalPages]);

  const handleNext = () => {
    if (activePage > totalPages) return;
    onPageChange(activePage + 1);
  };

  const handlePrevious = () => {
    if (activePage <= 1) return;
    onPageChange(activePage - 1);
  };

  const handlePageChange = (page, index) => () => {
    onPageChange(page);
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
            onClick={handlePageChange(page, index)}
          >
            {page}
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
