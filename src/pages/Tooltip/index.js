import React from "react";
import { Tooltip } from "components";

import "./Tooltip.scss";

const TooltipPage = () => {
  return (
    <div className="tooltip-wrapper">
      <Tooltip
        position="left"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      >
        <button className="btn btn-secondary">Tooltip on left</button>
      </Tooltip>
      <Tooltip
        position="top"
        text="mmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      >
        <button className="btn btn-secondary">Tooltip on top</button>
      </Tooltip>
      <Tooltip
        arrow={false}
        position="bottom"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      >
        <button className="btn btn-secondary">Tooltip on bottom</button>
      </Tooltip>
      <Tooltip
        position="right"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      >
        <button className="btn btn-secondary">Tooltip on right</button>
      </Tooltip>
      <button className="btn btn-secondary" id="tip">
        Tooltip on right
      </button>
    </div>
  );
};

export default TooltipPage;
