const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/popular", async (req, res) => {
  try {
    const products = await Product.find({ featured: true });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/test", (req, res) => {
  res.send("Product routes working");
});

module.exports = router;