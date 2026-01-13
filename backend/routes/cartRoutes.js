const express = require("express");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Get cart for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart || { items: [] });
});

// Add item to cart
router.post("/add", authMiddleware, async (req, res) => {
  const { productId, name, image, price } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = new Cart({ userId: req.user.id, items: [] });

  const existing = cart.items.find((i) => i.productId.toString() === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.items.push({ productId, name, image, price, quantity: 1 });
  }
  await cart.save();
  res.json(cart);
});

// Update item quantity
router.put("/update", authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  const item = cart.items.find((i) => i.productId.toString() === productId);
  if (item) item.quantity = quantity;
  await cart.save();
  res.json(cart);
});

// Remove item from cart
router.delete("/remove/:productId", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.items = cart.items.filter(
    (i) => i.productId.toString() !== req.params.productId
  );
  await cart.save();
  res.json(cart);
});

module.exports = router;