const express = require('express');
const router = express.Router();
const productControllerMongoose = require('../controllers/productControllerMongoose');
const productControllerNative = require('../controllers/productControllerNative');

// Routes for Mongoose
router.post('/mongoose/products', productControllerMongoose.createProduct);
router.get('/mongoose/products', productControllerMongoose.getProducts);
router.put('/mongoose/products/:id', productControllerMongoose.updateProduct);
router.delete(
  '/mongoose/products/:id',
  productControllerMongoose.deleteProduct,
);

// Routes for MongoDB Native
router.post('/native/products', productControllerNative.createProduct);
router.get('/native/products', productControllerNative.getProducts);
router.put('/native/products/:id', productControllerNative.updateProduct);
router.delete('/native/products/:id', productControllerNative.deleteProduct);

module.exports = router;
