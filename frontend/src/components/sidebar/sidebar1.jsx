import React from 'react'
import "./sidebar1.css";

import one from "../../assets/images/listing/milk.png";
import two from "../../assets/images/listing/clothing.png";
import three from "../../assets/images/listing/petfood.png";
import four from "../../assets/images/listing/baking.png";
import five from "../../assets/images/listing/fruit.png";

import Badge from "react-bootstrap/Badge";
import { Link } from 'react-router-dom';

export const Sidebar1 = () => {
  return (
    <div className="sidebar1 border">
        <h2>Categories</h2>
        <ul>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Cake%20&%20Milk'>Cake & Milk</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Coffee%20&%20Tea'>Coffee & Tea</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Drinks'>Drinks</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Electronics'>Electronics</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Kitchen'>Kitchen</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Pet%20Food'>Pet Food</Link>
            </button>
          </li>
          <li>
            <button className="sidebarCatBtnWrapper">
              <Link className='sidebarLink' to='/category/Shoes'>Shoes</Link>
            </button>
          </li>
        </ul>
      </div>
  )
}
