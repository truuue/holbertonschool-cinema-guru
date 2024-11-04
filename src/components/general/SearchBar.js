import React from 'react';
import './general.css';

function SearchBar({ title, setTitle }) {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={title}
        onChange={handleInput}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
