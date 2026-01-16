const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// CRUD routes
router.post("/", createProduct);
router.get("/", getProducts); // ✅ search logic will live inside controller
router.get("/popular", async (req, res) => {
  try {
    const products = await Product.find({ featured: true });
    res.json(products);
  } catch (error) {
    console.error("Error fetching popular products: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;