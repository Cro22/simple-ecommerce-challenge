const cartController = require('./cart/cart.controller');
const Validator = require('./validatorMiddleware');
module.exports = (app) => {
  app.post('/addProductToCart', Validator('addProductToCartSchema'), cartController.addProductToCart);
  app.post('/createCart', Validator('cartSchema'), cartController.createCart);
  app.put('/updateCart', Validator('cartSchema'), cartController.updateCart);
  app.post('/madeOrder', Validator('userSchema'), cartController.createOrder);
};
