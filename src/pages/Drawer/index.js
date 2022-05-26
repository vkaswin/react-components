import React, { Fragment, useState } from "react";
import { Drawer } from "components";

import "./Drawer.scss";

const drawers = [
  { position: "left" },
  { position: "right" },
  { position: "top" },
  { position: "bottom" },
];

const DrawerPage = () => {
  const [drawer, setDrawer] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (position) => () => {
    setDrawer({ ...drawer, [position]: !drawer[position] });
  };

  return (
    <div className="drawer-container">
      {drawers.map(({ position }, index) => {
        return (
          <Fragment key={index}>
            <button
              className="btn btn-secondary"
              onClick={toggleDrawer(position)}
            >
              {position}
            </button>
            <Drawer
              isOpen={drawer[position]}
              toggle={toggleDrawer(position)}
              position={position}
            >
              <div className="drawer-title">
                <b>Welcome to React! 👋</b>
              </div>
            </Drawer>
          </Fragment>
        );
      })}
    </div>
  );
};

export default DrawerPage;
