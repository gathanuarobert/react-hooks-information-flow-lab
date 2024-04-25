import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory); // Call the callback function with the selected category
  }
  
  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="all">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;