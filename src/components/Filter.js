import React, { useState } from "react";

function Filter({search, onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" value={search} onChange={onSearchChange} name="search" placeholder="Search..." />
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
