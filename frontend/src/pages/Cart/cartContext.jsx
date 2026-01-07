import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = "demouser";

  useEffect(() => {
    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data.items || []))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const addToCart = (product) => {
    fetch(`http://localhost:5000/api/cart/${userId}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items))
      .catch((err) => console.error("Error adding to cart:", err));
  };

  const updateQuantity = (productId, quantity) => {
    fetch(`http://localhost:5000/api/cart/${userId}/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items));
  };

  const removeFromCart = (productId) => {
    fetch(`http://localhost:5000/api/cart/${userId}/remove/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};