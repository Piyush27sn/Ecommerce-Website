import React, { useRef } from "react";
import { HomeSliderProducts } from "./homeSliderProducts";
import "./homeSliderProductCard.css";

export const HomeSliderProductCard = ({HomeSliderProducts}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; // Adjust based on card width
      current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="productGrid mt-3 mb-3">
        <button onClick={() => scroll('prev')} className="sliderButton m-1">‹</button>
        <div className="productRow" ref={scrollRef}>

        {HomeSliderProducts.map((product) => (
          <div key={product.id} className="productCard">
            <img
              src={product.image}
              alt="product.name"
              className="productImage"
            />
            <h5> {product.name} </h5>
            {/* <p> Category: {product.category} </p> */}
            <h6> Quantity: {product.quantity} </h6>
            {/* <h6> Price: ₹{product.price} </h6> */}
            {/* <button className="cardBtn">Add to cart</button> */}
          </div>
        ))}
        </div>
        <button onClick={() => scroll('next')} className="sliderButton m-1">›</button>
      </div>
    </>
  );
};
