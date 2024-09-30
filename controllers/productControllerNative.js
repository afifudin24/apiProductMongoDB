const { ObjectId } = require('mongodb');
const { getDb } = require('../config/databaseNative');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const db = getDb();

    const product = await db.collection('products').insertOne(req.body);
    // console.log(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read Products
exports.getProducts = async (req, res) => {
  try {
    const db = getDb();
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const db = getDb();
    const product = await db
      .collection('products')
      .findOneAndUpdate(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body },
        { returnOriginal: false },
      );
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const db = getDb();
    await db
      .collection('products')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
