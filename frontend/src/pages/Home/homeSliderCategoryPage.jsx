import React, { useContext, useEffect, useState } from "react";
import "./homeSliderCategoryPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Cart/cartContext";
import { WishlistContext } from "../Wishlist/wishlistContext";
import { Favorite, FavoriteBorder, TurnedInSharp } from "@mui/icons-material";
import { StarRating } from "./starRating";


export const HomeSliderCategoryPage = () => {
  const { categoryName } = useParams(); // read from URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { addToCart } = useContext(CartContext);
  console.log("Context addToCart:", addToCart);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  const handleViewMore = (product) => {
    navigate(`/details/${product._id}`);
  };

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Filter by category name (case-insensitive)
        if (categoryName && categoryName !== "All") {
          const filtered = data.filter(
            (prod) =>
              prod.category?.toLowerCase() === categoryName.toLowerCase(),
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(data); // show all if "All"
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [categoryName]);


  return (
    <div className="container">
      <h2 className="pt-3" style={{ color: "#ff6600" }}> '{categoryName}' products <span style={{ color: "gray", fontWeight: "normal" }}>({filteredProducts.length})</span> </h2>
      <div className="row">
        {filteredProducts.map((prod) => (
          <div
            key={prod._id}
            className="listingMain col-lg-3 col-md-6 col-sm-12 g-3"
          >
            <div className="popularCard">
              {prod.discount > 0 && (
                <>
                  <TurnedInSharp className="discountBadge" />
                  <h6 className="discountText">
                    {prod.discount}%<br />
                    off
                  </h6>
                </>
              )}
              <div
                className="cursorPointer d-flex justify-content-center pb-2"
                onClick={() => handleViewMore(prod)}
              >
                <img
                  src={`http://localhost:5000/images/${prod.image}`}
                  alt={prod.name}
                />
              </div>
              <p>{prod.category}</p>
              <h3
                className="cursorPointer"
                onClick={() => handleViewMore(prod)}
              >
                {prod.name}
              </h3>
              <StarRating rating={prod.ratingP} />
              <div className="d-flex">
                <h6 className="discountedPrice">
                  ₹{prod.price - (prod.price * prod.discount) / 100}
                </h6>
                <h6 className="originalPrice">₹{prod.price}</h6>
              </div>
              <button className="cardBtn" onClick={() => addToCart(prod)}>
                Add to cart
              </button>
              {isInWishlist(prod._id) ? (
                <Favorite
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginLeft: "1rem",
                  }}
                  onClick={() => removeFromWishlist(prod._id)}
                />
              ) : (
                <FavoriteBorder
                  style={{
                    cursor: "pointer ",
                    color: "gray",
                    marginLeft: "1rem",
                  }}
                  onClick={() => addToWishlist(prod)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center pt-5 pb-2" style={{ color: "gray" }}>
        <Link to="/listing">Click here</Link> to browse all products.
      </p>
    </div>
  );
};
