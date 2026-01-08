import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CategoryDropdown = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // Fetch categories from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Filter categories based on search input
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle selection and navigation
  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setSearchTerm("");
    navigate(`/category/${cat._id}`); // or `/category/${cat.name}` if using name-based routing
  };

  return (
    <div>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedCategory ? selectedCategory.name : "Select Category"}
      </a>
      <ul className="dropdown-menu">
        <li>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </li>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <li
              key={cat._id}
              onClick={() => handleSelect(cat)}
              className={`dropdown-item ${
                selectedCategory?._id === cat._id ? "active" : ""
              }`}
            >
              {cat.name}
            </li>
          ))
        ) : (
          <li className="dropdown-item text-muted">No matches found</li>
        )}
      </ul>
    </div>
  );
};