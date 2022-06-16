import React from "react";

const FilterDate = ({ date, name, onDateChange }) => {
  //5) Complete select attributes
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="date"
          value={date}
          name={name}
          onChange={onDateChange}
        />
      </div>
    </div>
  );
};

export default FilterDate;
