import React, { useContext, useState } from "react"; 

import "./listingProducts.css";
import { StarRating } from "../Home/starRating";
import { TurnedInSharp } from "@mui/icons-material";
import { CartContext } from "../Cart/cartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SortButton } from "./sortButton";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { WishlistContext } from "../Wishlist/wishlistContext";

export const ListingProducts = ({ filterProducts }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    // Only fetch if no products are passed from parent
    if (!filterProducts || filterProducts.length === 0) {
      fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setSortedProducts(data);
        })
        .catch((err) => console.error("Error fetching products: ", err));
    } else {
      // Use filtered products from parent
      setProducts(filterProducts);
      setSortedProducts(filterProducts);
    }
  }, [filterProducts]);


  const { addToCart } = useContext(CartContext);
  console.log("Context addToCart:", addToCart);

  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const handleViewMore = (product) => {
    navigate(`/details/${product._id}`);
  };


  const handleSortChange = (option) => {
    let sorted = [...products];
    switch (option) {
      case "Price: Low to High":
        sorted.sort((a,b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sorted.sort((a,b) => b.price - a.price);
        break;
      case "Rating":
        sorted.sort((a,b) => b.ratingP - a.ratingP);
        break;
      case "Featured":
        sorted = products.filter((p) => p.featured);
        break;
      default:
        sorted = products;
    }
    setSortedProducts(sorted);
  }


  return (
  <div className="container">
    {/* Pass the callback into SortButton */}
    <SortButton onSortChange={handleSortChange} />

    <div className="row">
      {sortedProducts.map((product) => (
        
        <div key={product._id} className="listingMain col-lg-4 col-md-6 col-sm-12 g-3">
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
            <div className="cursorPointer d-flex justify-content-center pb-2"  onClick={() => handleViewMore(product)}>
              <img
                src={`http://localhost:5000/images/${product.image}`}
                alt={product.name}
              />
            </div>
            <p>{product.category}</p>
            <h3 className="cursorPointer" onClick={() => handleViewMore(product)}>{product.name}</h3>
            <StarRating rating={product.ratingP} />
            <div className="d-flex">
              <h6 className="discountedPrice">
                ₹{product.price - (product.price * product.discount) / 100}
              </h6>
              <h6 className="originalPrice">₹{product.price}</h6>
            </div>
            <button className="cardBtn" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            {isInWishlist(product._id) ? (
              <Favorite 
                style={{ color: "red", cursor: "pointer", marginLeft: "1rem" }}
                onClick={() => removeFromWishlist(product._id)}
              />
            ) : (
              <FavoriteBorder 
                style={{ cursor: "pointer ", color: "gray", marginLeft: "1rem"}}
                onClick={() => addToWishlist(product)}
              />
            )}
          </div>
        </div>
        
      ))}
    </div>
  </div>
);
};
