import React, { useContext, useState } from "react";
import "./cartPage.css";
import { CartContext } from "./cartContext";
import { Box, Button, Typography } from "@mui/material";

export const CartPage = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } =
    useContext(CartContext);

  const totalAmount = (cartItems || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="container pt-4 pb-5 cartMain">
      {totalAmount != 0 && <h2 className="pt-2">My Cart</h2>}
      {!cartItems || cartItems.length === 0 ? (
        <div className="cartEmpty">
          <h1>Your cart is empty</h1>
          <p>
            To go back to home page, <a href="/">click here.</a>
          </p>
        </div>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="col-lg-12 col-md-12 col-sm-12 g-3"
            >
              <div className="cartCard d-flex justify-content-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <img
                        src={`http://localhost:5000/images/${item.image}`}
                        alt={item.name}
                      />
                    </div>

                    <div className="col-lg-8 col-sm-12">
                      <h4>{item.name}</h4>
                      <p>₹{item.price}</p>
                      <div className="d-flex gap-5">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Button
                            variant="contained"
                            className="cartPageBtn"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            sx={{
                              minWidth: "32px",
                              width: "32px",
                              padding: "4px",
                            }}
                          >
                            -
                          </Button>
                          <Typography
                            variant="h6"
                            sx={{ paddingLeft: "5px", paddingRight: "5px" }}
                          >
                            {item.quantity}
                          </Typography>
                          <Button
                            variant="contained"
                            className="cartPageBtn"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            sx={{
                              minWidth: "32px",
                              width: "32px",
                              padding: "4px",
                            }}
                          >
                            +
                          </Button>
                        </Box>
                        <button
                          className="cardBtn"
                          onClick={() => removeFromCart(item.productId)}
                        >
                          Remove
                        </button>
                        <div className="d-flex align-items-end">
                          <h5>Total Price: ₹{item.price * item.quantity}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {totalAmount > 0 && (
        <div className="cartTotal mt-4">
          <h3>Grand Total: ₹{totalAmount}</h3>
        </div>
      )}
    </div>
  );
};
