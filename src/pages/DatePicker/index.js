import React, { useState } from "react";
import { DatePicker } from "components";

const DatePickerPage = () => {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });

  const handleChange = ({ name, value }) => {
    setDates({ ...dates, [name]: value });
  };

  return (
    <div className="d-flex flex-column gap-4" style={{ width: "350px" }}>
      <div>
        <label>Start Date</label>
        <DatePicker
          name="startDate"
          value={dates.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date</label>
        <DatePicker
          name="endDate"
          value={dates.endDate}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DatePickerPage;
