import React, { useState } from "react";
import "./sortButton.css";

export const SortButton = () => {
  const [selected, setSelected] = useState("Select Category");

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="sortBtn">
      <div className="dropdown">
        <button
          className="btn btn-outline-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort by: {selected}
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("Featured")}
            >
              Featured
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("Price: Low to High")}
            >
              Price: Low to High
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("Price: High to Low")}
            >
              Price: High to Low
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => handleSelect("Rating")}
            >
              Rating
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
