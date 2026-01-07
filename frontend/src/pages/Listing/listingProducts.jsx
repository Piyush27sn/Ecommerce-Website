import React, { useContext, useState } from "react"; 

import "./listingProducts.css";
import { StarRating } from "../Home/starRating";
import { TurnedInSharp } from "@mui/icons-material";
import { CartContext } from "../Cart/cartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ListingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  const { addToCart } = useContext(CartContext);
  console.log("Context addToCart:", addToCart);

  const navigate = useNavigate();

  const handleViewMore = (product) => {
    // navigate("/details", { state: { product } });
    navigate(`/details/${product._id}`);

  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 g-3">
            <div className="popularCard">
              {product.discount > 0 && (
                <>
                  <TurnedInSharp className="discountBadge" />
                  <h6 className="discountText">
                    {product.discount}%<br />
                    off
                  </h6>
                </>
              )}
              <div className="d-flex justify-content-center pb-2">
                <img src={`http://localhost:5000/images/${product.image}`} />
              </div>
              <p>{product.category} </p>
              <h3> {product.name} </h3>
              <StarRating rating={product.ratingP} />
              <div className="d-flex">
                <h6 className="discountedPrice">
                  {" "}
                  ₹{product.price -
                    (product.price * product.discount) / 100}{" "}
                </h6>
                <h6 className="originalPrice"> ₹{product.price} </h6>
              </div>
              <button className="cardBtn" onClick={() => addToCart(product)}>
                Add to cart
              </button>
              <button
                className="cardBtn ms-2"
                onClick={() => handleViewMore(product)}
              >
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
