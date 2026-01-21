import React from "react";
import { Blog1 } from "./blog1";
import { Blog2 } from "./blog2";
import { Link } from "react-router-dom";
import "./blogs.css";


export const Blogs = () => {
  return (
    <div className="container blogsPage">
      <h1> Our Blogs </h1>
      <ul>
        <li>
          <Link to="/blogs/blog-1"> Top 10 Must‑Have Gadgets for 2026 </Link>
        </li>
        <li>
          <Link to="/blogs/blog-2">
            Healthy Eating Made Easy: Fresh Picks from Our Store{" "}
          </Link>
        </li>
        <li>
          <Link to="/blogs/blog-3">
            Gift Guide 2026: Perfect Presents for Every Occasion{" "}
          </Link>
        </li>
        <li>
          <Link to="/blogs/blog-4">
            Sustainable Shopping: How Your Choices Make a Difference{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};
