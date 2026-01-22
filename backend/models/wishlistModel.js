const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        products: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                addedAt: { type: Date, default: Date.now }
            }
        ]
    }
);

// Ensure one wishlist per user
wishlistSchema.index({ userId: 1 }, { unique: true });

// Prevent duplicate productIds inside a user's wishlist
wishlistSchema.index({ userId: 1, "products.productId": 1 }, { unique: true });


module.exports = mongoose.model("Wishlist", wishlistSchema);