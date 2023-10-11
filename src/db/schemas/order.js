const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cartId: String, 
  totals: {
    products: Number,
    discounts: Number,
    shipping: Number,
    order: Number,
    subTotal: Number
  }
});

module.exports = orderSchema;
