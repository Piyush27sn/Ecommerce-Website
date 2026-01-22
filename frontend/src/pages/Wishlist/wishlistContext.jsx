import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Toast } from "bootstrap";

export const WishlistContext = createContext([]);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const BASE_URL = "http://localhost:5000";
  const [token, setToken] = useState(localStorage.getItem("token"));

  // load wishlist from backend when user logs in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${BASE_URL}/api/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setWishlist(res.data.products || []))
        .catch((err) => {
          console.error("Error fetching wishlist: ", err);
          setWishlist([]);
        });
    } else {
      setWishlist([]); // clear wishlist if not logged in
    }
  }, [token]);

  // Add product to wishlist
  const addToWishlist = async (productId, productName) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to add to wishlist");
      return;
    }

    // fallback if productName not provided
    if (!productName) {
      const product = wishlist.find(
        (item) =>
          (typeof item.productId === "object"
            ? item.productId._id
            : item.productId) === productId,
      );
      productName = product?.productId?.name || "Product";
    }

    if (
      wishlist.some((item) => {
        const id =
          typeof item.productId === "object"
            ? item.productId._id
            : item.productId;
        return id?.toString() === productId.toString();
      })
    ) {
      showToast(`${productName} is already in your wishlist!`);
      return;
    }
    try {
      const res = await axios.post(
        `${BASE_URL}/api/wishlist`,
        { productId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setWishlist(res.data.products || []);
      showToast(`${productName} added to wishlist!`);
    } catch (err) {
      console.error("Error adding to wishlist: ", err);
      showToast("Failed to add to wishlist");
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to remove from wishlist");
      return;
    }
    try {
      const res = await axios.delete(`${BASE_URL}/api/wishlist/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlist(res.data.products || []);
      showToast("Removed from wishlist");
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => {
      const id =
        typeof item.productId === "object"
          ? item.productId._id
          : item.productId;
      return id?.toString() === productId.toString();
    });
  };

  // Helper: show toast with dynamic message
  const showToast = (message) => {
    const toastBody = document.getElementById("wishlistToastBody");
    if (toastBody) toastBody.textContent = message;

    const toastEl = document.getElementById("wishlistToast");
    if (toastEl) {
      const toast = new Toast(toastEl);
      toast.show();
    }
  };

  const refreshWishlist = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await axios.get(`${BASE_URL}/api/wishlist`);
      setWishlist(res.data.products || []);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        refreshWishlist,
        setToken,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
