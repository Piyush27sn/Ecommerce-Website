const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

// routes/category.js
router.get("/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");

    const structured = categories.map((cat) => ({
      name: cat,
      image:
        cat === "Cake & Milk"
        ? "/images/categories/milk-cat.jpg"
        : cat === "Coffee & Tea"
        ? "/images/categories/tea-cat.webp"
        : cat === "Pet Food"
        ? "/images/categories/pet-cat.jpg"
        : cat === "Vegetables & Fruits"
        ? "/images/categories/veg-cat.jpg"
        : cat === "Electronics"
        ? "/images/categories/electronics-cat.jpg"
        : cat === "Kitchen"
        ? "/images/categories/kitchen-cat.jpg"
        : cat === "Drinks"
        ? "/images/categories/juice-cat.jpg"
        : cat === "Shoes"
        ? "/images/categories/shoes-cat.jpg"
        : "/images/categories/default.jpg",
    }));

    res.json(structured);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

module.exports = router;