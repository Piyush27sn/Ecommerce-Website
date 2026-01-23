import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./sortButton.css";


export const SortButton = ({ onSortChange }) => {
  const [selected, setSelected] = useState("Select Category");

  const handleSelect = (value) => {
    setSelected(value);
    onSortChange(value);
  };

  return (
    <div className="sortBtn">
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          Sort by: {selected || "All Items"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSelect("")}>
            All Items
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Featured")}>
            Featured
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Price: Low to High")}>
            Price: Low to High
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Price: High to Low")}>
            Price: High to Low
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Rating")}>
            Rating
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
