import React, { useState } from "react";
import "./SortBy.css";

const SortBy = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("default");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption); // Notify parent component about the sort change
  };

  return (
    <div>
      <h1>hey</h1>
      <div className="sort-by">
        <select id="sort" value={sortOption} onChange={handleChange}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
