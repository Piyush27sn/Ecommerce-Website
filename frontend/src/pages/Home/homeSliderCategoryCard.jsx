import React from "react";
import "./homeSliderCategoryCard.css";

export const HomeSliderCategoryCard = ({ name, image, onClick }) => {
  console.log("Card props:", { name, image });

  return (
    <div
      className="categoryCard"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={
          image
            ? `http://localhost:5000${image}`
            : `http://localhost:5000/images/categories/default.jpg`
        }
        alt={name || "Category"}
        className=""
      />
      <h6> {name} </h6>
    </div>
  );
};
