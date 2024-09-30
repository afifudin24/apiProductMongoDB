const Product = require('../models/productModelMongoose');
const mongoose = require('mongoose');
const connectDB = require('../config/databaseMongoose'); // Impor fungsi koneksi
// Create Product
exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    await connectDB(); // Pastikan untuk menghubungkan ke database

    const product = new Product(req.body);
    console.log(product);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read Products
exports.getProducts = async (req, res) => {
  try {
    await connectDB(); // Pastikan untuk menghubungkan ke database

    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    await connectDB(); // Pastikan untuk menghubungkan ke database

    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    await connectDB(); // Pastikan untuk menghubungkan ke database

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
