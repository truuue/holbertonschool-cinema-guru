import React from "react";
import "./general.css";

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = event => {
    setValue(event.target.value);
  };

  return (
    <div className="select-container">
      {label && <label>{label}</label>}
      <select 
        className={`select ${className || ''}`}
        value={value}
        onChange={handleSelect}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
