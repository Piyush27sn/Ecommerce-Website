import React, { useContext, useState } from "react";
import { HomeSliderProducts } from "../Home/homeSliderProducts";
import { useNavigate } from "react-router-dom";

import "./listingProducts.css";
import { StarRating } from "../Home/starRating";
import { TurnedInSharp } from "@mui/icons-material";
import { CartContext } from "../Cart/cartContext";


export const ListingProducts = ({ HomeSliderProducts }) => {
  const { addToCart } = useContext(CartContext);
console.log("Context addToCart:", addToCart);
  
  const navigate = useNavigate();

  const handleViewMore = (product) => {
    navigate("/details", { state: { product } });
  };


  return (
    <div className="container">
      <div className="row">
        {HomeSliderProducts.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 g-3">
            <div className="popularCard">
                <TurnedInSharp className="discountBadge" /><h6 className="discountText">10%<br />off</h6>
              <div className="d-flex justify-content-center pb-2">
                <img src={product.image} />
              </div>
              <p>{product.category} </p>
              <h3> {product.name} </h3>
              <StarRating rating={product.ratingP} />
              <div className="d-flex">
                <h6 className="discountedPrice"> ₹{product.price - (product.price * 10) / 100} </h6>
                <h6 className="originalPrice"> ₹{product.price} </h6>
              </div>
              <button className="cardBtn" onClick={ () => addToCart(product)}>Add to cart</button>
              <button className="cardBtn ms-2" onClick={() => handleViewMore(product)}>View more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
