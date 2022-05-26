import { Collapse } from "components/Collapse";
import React from "react";

const CollapsePage = () => {
  return (
    <div>
      <h1>Collapse</h1>
      <button id="toggle">Click Me</button>
      <Collapse trigger="toggle">
        <span>Loreum Ispum</span>
      </Collapse>
    </div>
  );
};

export default CollapsePage;
