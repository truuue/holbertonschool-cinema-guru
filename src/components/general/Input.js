import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <input
          type={type}
          className={`input ${className || ''}`}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}

export default Input;
