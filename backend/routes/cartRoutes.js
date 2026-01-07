const express = require("express");
const Cart = require("../models/Cart");
const router = express.Router();


// get cart by user
router.get("/:userId", async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json( cart || { items: []} );
});


// add item
router.post("/:userId/add", async (req, res) => {
    const { productId, name, image, price } = req.body;
    let cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) cart = new Cart({ userId: req.params.userId, items: [] });

    const existing = cart.items.find((i) => i.productId.toString() === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.items.push({ productId, name, image, price, quantity: 1});
    }
    await cart.save();
    res.json(cart);
});


// update quantity
router.put("/:userId/update", async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found"});

    const item = cart.items.find((i) => i.productId.toString() === productId);
    if (item) item.quantity = quantity;
    await cart.save();
    res.json(cart);
});

// remove item
router.delete("/:userId/remove/:productId", async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
        (i) => i.productId.toString() !== req.params.productId
    );
    await cart.save();
    res.json(cart);
});

module.exports = router;