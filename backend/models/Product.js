const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: String,
        ratingP: Number,
        image: String,
        featured: { type: Boolean, default: false }
    }
);

module.exports = mongoose.model("Product", productSchema);
