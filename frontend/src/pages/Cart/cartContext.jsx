import React, { createContext, useState, useEffect } from "react";
import { Toast } from "bootstrap";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  const loadCart = () => {
    if (!token) return; // dont fetch if not logged in

    fetch(`http://localhost:5000/api/cart/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items || []))
      .catch((err) => {
        console.error("Error fetching cart:", err);
        setCartItems([]); //fallback
      });
  };

  useEffect( () => {
    loadCart();
  }, [token]);

  const addToCart = (product) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.items)
      })
      .catch((err) => console.error("Error adding to cart:", err));

      const toastEl = document.getElementById("cartToast");
      const toast = new Toast(toastEl);
      toast.show();
  };

  const updateQuantity = (productId, quantity) => {
    fetch(`http://localhost:5000/api/cart/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items));
  };

  const removeFromCart = (productId) => {
    fetch(`http://localhost:5000/api/cart/remove/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCartItems(data.items));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, loadCart, setToken }}
    >
      {children}
    </CartContext.Provider>
  );
};