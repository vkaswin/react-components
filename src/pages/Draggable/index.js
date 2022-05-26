import React from "react";
import { Draggable } from "components";

import "./Draggable.scss";

const DraggablePage = () => {
  return (
    <Draggable>
      <div className="draggable-container"></div>
    </Draggable>
  );
};

export default DraggablePage;
