import React, { useState } from "react";
import { MultiSelect } from "components";

const MultiSelectPage = () => {
  const option = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
  ];

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    setSelected(e);
  };

  return (
    <div style={{ maxWidth: "350px" }}>
      <MultiSelect
        options={option}
        onChange={handleChange}
        selectedOptions={selected}
        placeholder="Select"
      />
    </div>
  );
};

export default MultiSelectPage;
