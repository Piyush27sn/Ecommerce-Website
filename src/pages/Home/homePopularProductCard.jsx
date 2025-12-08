import React from "react";
import { HomeSliderProducts } from "./homeSliderProducts";
import "./homePopularProductCard.css";
import { StarRating } from "./starRating";
import { TurnedInSharp } from "@mui/icons-material";

export const HomePopularProductCard = ({ HomeSliderProducts }) => {
  return (
    <div className="container">
      <div className="row">
        {HomeSliderProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 g-3">
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
              <button className="cardBtn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
