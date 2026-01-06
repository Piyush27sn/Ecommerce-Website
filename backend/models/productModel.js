const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true},
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        ratingP: Number,
        image: String,
        images: [{ type: String }],
        featured: { type: Boolean, default: false },
        discount: { type: Number, default: 0},

        quantity: { type: Number, required: false },
        description: { type: String, required: false },
        vendor: { type: String, required: false },
        addInfo: { type: String }
    }
);

module.exports = mongoose.model("Product", productSchema);
