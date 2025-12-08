import React, { useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";  
import { Badge } from "@mui/material";
import "./cart.css";

export const Wishlist = () => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const addItemToWishlist = () => {
    setWishlistCount((prev) => prev + 1);
  };

  return (
    <div>
      <Badge
        badgeContent={wishlistCount}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#ff6600",
            color: "#fff",
            fontSize: "0.75rem",
          },
        }}
      >
        <FavoriteBorder className="cartIcon" />
      </Badge>

      <button className="cartBtn" onClick={addItemToWishlist}>
        Wishlist
      </button>
    </div>
  );
};
