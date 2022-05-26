import React, { useRef } from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

import "./DropZone.scss";

export const DropZone = ({
  children,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  className,
}) => {
  const dropZoneRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    onDrop([...files]);
  };

  return (
    <div
      className={classNames("rc-dropzone", { [className]: className })}
      ref={dropZoneRef}
      onDragEnter={onDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={onDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

DropZone.propTypes = {
  children: PropTypes.node.isRequired,
  onDragLeave: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  className: PropTypes.string,
};

DropZone.defaultProps = {
  onDragLeave: () => {},
  onDragEnter: () => {},
  onDragOver: () => {},
  onDrop: () => {},
  className: "",
};
