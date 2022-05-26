import React, { Fragment, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./InfiniteScroll.scss";

export const InfiniteScroll = ({
  children,
  loader,
  className,
  threshold,
  onLoadMore,
  hasNextPage,
  rootMargin,
}) => {
  const loaderRef = useRef();

  const isFirstIntersect = useRef(true);

  const options = {
    root: null,
    rootMargin,
    threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options
    );

    const loader = loaderRef.current;

    observer.observe(loader);

    return () => observer.unobserve(loader);
  }, []);

  const handleIntersectionObserver = ([{ isIntersecting }]) => {
    if (isFirstIntersect.current) {
      isFirstIntersect.current = false;
      return;
    }

    if (!isIntersecting) return;
    onLoadMore();
  };

  return (
    <div className={className}>
      {children}
      <div
        ref={loaderRef}
        className="rc-scroll-loader"
        aria-hidden={hasNextPage}
      >
        {loader}
      </div>
    </div>
  );
};

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  loader: PropTypes.node,
  className: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
};

InfiniteScroll.defaultProps = {
  className: null,
  threshold: 1.0,
  rootMargin: "10px 0px",
  loader: (
    <Fragment>
      <span className="loader-text">Loading</span>
      <i className="fas fa-spinner fa-spin loader-icon"></i>
    </Fragment>
  ),
};
