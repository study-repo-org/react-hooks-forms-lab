import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchText, setSearchText] = useState(search || "");

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    if (typeof onSearchChange === "function") {
      onSearchChange(value);
    }
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
