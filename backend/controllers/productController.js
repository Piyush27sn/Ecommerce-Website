const mongoose = require("mongoose");
const Product = require("../models/productModel");
const { errorResponse } = require("../utils/errorResponse");

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    if (!name || !price || !category) {
      return errorResponse(res, 400, "Name, price, and category are required");
    }

    if (!mongoose.Types.ObjectId.isValid(category)) {
      return errorResponse(res, 400, "Invalid category ID");
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return errorResponse(res, 404, "Category not found");
    }

    const product = await Product.create({
      name: name.trim(),
      price,
      description,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return errorResponse(res, 500, "Server error");
  }
};

// GET ALL PRODUCTS (with optional search)
exports.getProducts = async (req, res) => {
  const search = req.query.search?.trim() || "";

  try {
    let products;
    if (search.length >= 1) {
      products = await Product.find({
        name: { $regex: search, $options: "i" },
      }).select("id name image");
    } else {
      products = await Product.find(); // return all products if no search
    }

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return errorResponse(res, 500, "Server error");
  }
};

// GET SINGLE PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name slug"
    );
    if (!product) {
      return errorResponse(res, 404, "Product not found");
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return errorResponse(res, 500, "Server error");
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return errorResponse(res, 404, "Product not found");
    }

    if (name) product.name = name.trim();
    if (price) product.price = price;
    if (description) product.description = description;

    if (category) {
      if (!mongoose.Types.ObjectId.isValid(category)) {
        return errorResponse(res, 400, "Invalid category ID");
      }
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return errorResponse(res, 404, "Category not found");
      }
      product.category = category;
    }

    const updated = await product.save();
    res.json({
      success: true,
      message: "Product updated successfully",
      product: updated,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return errorResponse(res, 500, "Server error");
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return errorResponse(res, 404, "Product not found");
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return errorResponse(res, 500, "Server error");
  }
};
