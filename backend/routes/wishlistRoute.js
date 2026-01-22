const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlistModel");
const authMiddleware = require("../middleware/auth");

// Add product to wishlist
router.post("/wishlist", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;

    let wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [] });
    }

    // prevent duplicates
    if (wishlist.products.some(p => p.productId.toString() === productId.toString())) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    wishlist.products.push({ productId });
    await wishlist.save();

    const populatedWishlist = await Wishlist.findOne({ userId })
      .populate("products.productId");

    res.json(populatedWishlist);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Get user wishlist
router.get("/wishlist", authMiddleware, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.user.id })
      .populate("products.productId");

    if (!wishlist) {
      return res.json({ userId: req.user.id, products: [] });
    }

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Remove product from wishlist
router.delete("/wishlist/:productId", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;

    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    wishlist.products = wishlist.products.filter(
      p => p.productId.toString() !== productId.toString()
    );

    await wishlist.save();

    const populatedWishlist = await Wishlist.findOne({ userId })
      .populate("products.productId");

    res.json(populatedWishlist);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;