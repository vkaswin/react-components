import React, { Fragment } from "react";
import { DropZone } from "components";

import "./DropZone.scss";

const DropZonePage = () => {
  const handleDrop = (e) => {
    console.log(e);
  };

  return (
    <Fragment>
      <div className="dropzone-container">
        <DropZone
          onDrop={handleDrop}
          className="d-flex justify-content-center align-items-center"
        >
          <span>Drag and Drop File</span>
        </DropZone>
      </div>
    </Fragment>
  );
};

export default DropZonePage;
