import React, { Fragment } from "react";
import { Popover } from "components";

import "./Popover.scss";

const popover = [
  { label: "Left Center", position: "left-center" },
  { label: "Left Start", position: "left-start" },
  { label: "Left End", position: "left-end" },
  { label: "Right Center", position: "right-center" },
  { label: "Right Start", position: "right-start" },
  { label: "Right End", position: "right-end" },
  { label: "Top Center", position: "top-center" },
  { label: "Top Start", position: "top-start" },
  { label: "Top End", position: "top-end" },
  { label: "Bottom Center", position: "bottom-center" },
  { label: "Bottom Start", position: "bottom-start" },
  { label: "Bottom End", position: "bottom-end" },
];

const PopoverPage = () => {
  return (
    <Fragment>
      <div className="popover-wrapper">
        {popover.map(({ label, position }, index) => {
          return (
            <Popover key={index}>
              <Popover.Toggle>
                <button className="btn btn-secondary">{label}</button>
              </Popover.Toggle>
              <Popover.Menu position={position}>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </Popover.Menu>
            </Popover>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PopoverPage;
