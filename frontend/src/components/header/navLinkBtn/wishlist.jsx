import React, { useContext, useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../../pages/Wishlist/wishlistContext";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <Link to="/wishlist">
        <Badge
          badgeContent={wishlist.length}
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
      </Link>

      <Link to="/wishlist">
        <button className="cartBtn">Wishlist</button>
      </Link>
    </div>
  );
};
