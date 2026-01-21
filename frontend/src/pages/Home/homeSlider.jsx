import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeSliderCategoryCard } from "./homeSliderCategoryCard";
import "./homeSliderCategoryCard.css";


export const HomeSlider = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories([{ name: "All", image: null }, ...data]))
      .catch((err) => console.error("Error fetching categories: ", err));
  }, []);

  const handleCategoryClick = (catName) => {
    if (catName === "All") {
      navigate("/listing");
    } else {
      navigate(`/category/${catName}`);
    }
  };

  return (
    <div className="container mb-5 ps-0 pe-0">
      <div className="headingCat"><h2> Product Categories </h2></div>
      <div className="row gap-4 pt-5 ps-0 ms-0 pe-0 me-0">
        {categories.map((cat) => (
          <div className="col-lg-1 col-md-4 col-sm-6">
            <HomeSliderCategoryCard
              key={cat.name}
              name={cat.name}
              image={cat.image}
              onClick={() => handleCategoryClick(cat.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
