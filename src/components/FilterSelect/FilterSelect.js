import React from "react";

const FilterSelect = ({ name, onSelectChange, options, selected }) => {
  //4) Complete options
  const optionsValues = [
    options.map(({ value, name }) => (
      <option key={name} value={value}>
        {name}
      </option>
    )),
  ];

  //5) Complete select attributes
  return (
    <div className="field">
      <div className="control">
        <div className="select" style={{ width: "100%" }}>
          <select
            style={{ width: "100%" }}
            value={selected}
            name={name}
            onChange={onSelectChange}
          >
            {optionsValues}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;
