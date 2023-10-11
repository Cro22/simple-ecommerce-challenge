const mongoose = require('mongoose');
const orderSchema = require('./schemas/order');
const cartSchema = require('./schemas/cart');

mongoose.model('Order', orderSchema);
mongoose.model('Cart', cartSchema);
