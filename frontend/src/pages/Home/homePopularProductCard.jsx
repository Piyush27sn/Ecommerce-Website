import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Cart/cartContext";
import "./homePopularProductCard.css";
import { StarRating } from "./starRating";
import { Favorite, FavoriteBorder, TurnedInSharp } from "@mui/icons-material";
import { WishlistContext } from "../Wishlist/wishlistContext";
import { useNavigate } from "react-router-dom";


export const HomePopularProductCard = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  const handleViewMore = (product) => {
    navigate(`/details/${product._id}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products/popular")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="col-lg-3 col-md-6 col-sm-12 g-3">
              <div className="popularCard">
                <TurnedInSharp className="discountBadge" />
                <h6 className="discountText">
                  {product.discount}%<br />
                  off
                </h6>
                <div className="d-flex justify-content-center pb-2">
                  <img
                    src={`http://localhost:5000/images/${product.image}`}
                    alt={product.name}
                    onClick={() => handleViewMore(product)}
                    className="cursorPointer"
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
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginLeft: "1rem",
                    }}
                    onClick={() => removeFromWishlist(product._id)}
                  />
                ) : (
                  <FavoriteBorder
                    style={{
                      cursor: "pointer ",
                      color: "gray",
                      marginLeft: "1rem",
                    }}
                    onClick={() => addToWishlist(product)}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No popular products found.</p>
        )}
      </div>
    </div>
  );
};
