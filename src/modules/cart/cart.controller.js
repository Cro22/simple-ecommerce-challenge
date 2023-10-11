const { respondWithSuccess, respondWithError } = require('../../utils/responses');
const ErrorsHandlers = require('../../utils/errorsHandlers');
const cartServices = require('./cart.service');


async function addProductToCart(req, res) {
  try {
    const productData = {
      userId: req.body.userId,
      products: req.body.products,
    };
    const cart = await cartServices.addProductToCart(productData);
    return respondWithSuccess(res, 201, cart);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      return respondWithError(res, e.statusCode, e.message);

    console.error('addProductToCart:', e);
    return respondWithError(res, 500, 'Internal server error');
  }
}

async function createCart(req, res) {
  try {
    const cartData = {
      userId: req.body.userId,
      products: [],
    };
    const cart = await cartServices.createCart(cartData);
    return respondWithSuccess(res, 201, cart);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      return respondWithError(res, e.statusCode, e.message);

    console.error('createCartController:', e);
    return respondWithError(res, 500, 'Internal server error');
  }
}

async function updateCart(req, res) {
  try {
    const productData = {
      userId: req.body.userId,
      products: req.body.products,
    };
    const cart = await cartServices.updateCart(productData);
    return respondWithSuccess(res, 201, cart);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      return respondWithError(res, e.statusCode, e.message);

    console.error('updateCart:', e);
    return respondWithError(res, 500, 'Internal server error');
  }
}

async function createOrder(req, res) {
  try {
    const userId = req.body.userId;
    const order = await cartServices.createOrder(userId);
    return respondWithSuccess(res, 201, order);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      return respondWithError(res, e.statusCode, e.message);

    console.error('createOrder:', e);
    return respondWithError(res, 500, 'Internal server error');
  }
}

module.exports = {
  addProductToCart,
  createCart,
  updateCart,
  createOrder,
};