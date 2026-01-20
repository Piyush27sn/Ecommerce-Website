import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext([]);

export const WishlistProvider = ({ children }) => {
  // Load wishlist from localStorage on mount
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist") || "[]")
  );

  // Keep localStorage in sync whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add product to wishlist
  const addToWishlist = (product) => {
    const exists = wishlist.some((item) => item._id === product._id);
    if (exists) {
      showToast(`${product.name} is already in wishlist`);
      return;
    }

    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    showToast(`${product.name} added to wishlist!`);
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    showToast(`Removed from wishlist`);
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item._id === productId);
  };

  // Helper: show toast with dynamic message
  const showToast = (message) => {
    const toastBody = document.getElementById("wishlistToastBody");
    if (toastBody) toastBody.textContent = `${product.name} removed from wishlist`;

    const toastEl = document.getElementById("wishlistToast");
    if (toastEl) {
      const toast = new window.bootstrap.Toast(toastEl);
      toast.show();
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};