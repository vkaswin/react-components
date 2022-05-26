import React, { useState } from "react";
import { Overlay } from "components";

const OverlayPage = () => {
  const [overlay, setOverlay] = useState({
    one: false,
    two: false,
  });

  const toggle = (key) => () => {
    setOverlay({ ...overlay, [key]: !overlay[key] });
  };

  return (
    <div>
      <div className="d-flex gap-4">
        <div>
          <button className="btn btn-secondary" onClick={toggle("one")}>
            Toggle
          </button>
          <Overlay isOpen={overlay.one} toggle={toggle("one")} />
        </div>
        <div>
          <button className="btn btn-secondary" onClick={toggle("two")}>
            Toggle (append in end of body)
          </button>
          <Overlay isOpen={overlay.two} toggle={toggle("two")} portal={true} />
        </div>
      </div>
    </div>
  );
};

export default OverlayPage;
