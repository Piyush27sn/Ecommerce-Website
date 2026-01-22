import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './headerCategories.css';


export const HeaderCategories = () => {
  return (
    <div className="">
      <Dropdown>
        <Dropdown.Toggle className="catBtn">
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/listing'>All</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Cake%20&%20Milk'>Cake & Milk</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Coffee%20&%20Tea'>Coffee & Tea</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Drinks'>Drinks</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Electronics'>Electronics</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Kitchen'>Kitchen</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Pet%20Food'>Pet Food</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Shoes'>Shoes</Dropdown.Item>
          <Dropdown.Item as={Link} to='/category/Vegetables%20&%20Fruits'>Vegetables & Fruits</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
