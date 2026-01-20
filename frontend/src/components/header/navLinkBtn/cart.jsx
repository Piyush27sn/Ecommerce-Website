import React, { useContext, useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../pages/Cart/cartContext";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <Badge
          badgeContent={cartItems.length}
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
      </Link>

      <Link to="/cart">
        <button className="cartBtn">Cart</button>
      </Link>
    </div>
  );
};
