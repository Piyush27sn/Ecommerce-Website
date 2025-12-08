import React from 'react'
import "./sidebar1.css";

import one from "../../assets/images/listing/milk.png";
import two from "../../assets/images/listing/clothing.png";
import three from "../../assets/images/listing/petfood.png";
import four from "../../assets/images/listing/baking.png";
import five from "../../assets/images/listing/fruit.png";

import Badge from "react-bootstrap/Badge";

export const Sidebar1 = () => {
  return (
    <div className="sidebar1 border">
        <h2>Category</h2>
        <ul>
          <li>
            <button className="sidebarCatBtnWrapper">
              <img src={one} alt="Milk" />
              <span className="sidebarCatBtn">Milk & Dairies</span>
              <Badge className="sidebarCatBtnBadge">4</Badge>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <img src={two} />
              <span className="sidebarCatBtn">Clothing</span>
              <Badge className="sidebarCatBtnBadge">4</Badge>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <img src={three} />
              <span className="sidebarCatBtn">Pet Foods</span>
              <Badge className="sidebarCatBtnBadge">11</Badge>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <img src={four} />
              <span className="sidebarCatBtn">Baking Material</span>
              <Badge className="sidebarCatBtnBadge">4</Badge>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <img src={five} />
              <span className="sidebarCatBtn">Fresh Fruits</span>
              <Badge className="sidebarCatBtnBadge">4</Badge>
            </button>
          </li>
        </ul>
      </div>
  )
}
