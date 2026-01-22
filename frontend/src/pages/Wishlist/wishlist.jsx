import React, { useContext } from "react";
import "./wishlist.css";
import { WishlistContext } from "./wishlistContext";
import { StarRating } from "../Home/starRating";

export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container pt-4 pb-5 wishlistMain">
      {wishlist.length === 0 ? (
        <div className="wishlistEmpty">
          <h1>Your wishlist is empty</h1>
          <p>
            To go back to home page, <a href="/">click here.</a>
          </p>
        </div>
      ) : (
        <div className="row">
          <h2> My Wishlist </h2>
          {wishlist.map((item, index) => {
            const product = item.productId;
            if (!product) return null;

            return (
              <div
                key={`${product._id}-${index}`}
                className="col-lg-12 col-md-12 col-sm-12 g-3"
              >
                <div className="wishlistCard d-flex justify-content-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-sm-12">
                        <img
                          src={`http://localhost:5000/images/${product.image}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="col-lg-8 col-sm-12">
                        <h4>{product.name}</h4>
                        <StarRating rating={product.ratingP} />
                        <p>₹{product.price}</p>
                        <div className="d-flex gap-5">
                          <button
                            className="cardBtn"
                            onClick={() => removeFromWishlist(product._id)}
                          >
                            Remove from wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
