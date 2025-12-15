import React, { useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material"; 
import { Badge } from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div>
      <Badge
        badgeContent={cartCount}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#ff6600",
            color: "#fff",
            fontSize: "0.75rem",
          },
        }}
      >
        <ShoppingCartOutlined className="cartIcon" />
      </Badge>

      <Link to='/cart'>
      <button className="cartBtn" 
      // onClick={addItemToCart}
      >
        Cart
      </button>
      </Link>
    </div>
  );
};
