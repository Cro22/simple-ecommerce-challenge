const mongoose = require('mongoose');
const productSchema = require('./product.js');

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [productSchema],
  order: Boolean
});

module.exports =  cartSchema;