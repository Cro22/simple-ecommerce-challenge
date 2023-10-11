const DatabaseMongo = require('../../db/mongo');
const ErrorsHandlers = require('../../utils/errorsHandlers');

async function createCart(cartData) {
  try {
    const Cart = DatabaseMongo.getDatabaseConnection().model('Cart');
    await deleteCart(cartData.userId);
    cartData.order = false;
    const newCart = new Cart(cartData);
    return newCart.save();
  } catch (e) {
    throw new Error(e);
  }
}

async function createOrder(orderData) {
  try {
    const Cart = DatabaseMongo.getDatabaseConnection().model('Cart');
    const Order = DatabaseMongo.getDatabaseConnection().model('Order');
    const userCart = await Cart.findById(orderData.cartId);
    userCart.order = true;
    userCart.save();
    const order = await new Order(orderData).save();
    return { userCart, order };
  } catch (e) {
    throw new Error(e);
  }
}

async function addProductToCart(userId, products) {
  try {
    const Cart = DatabaseMongo.getDatabaseConnection().model('Cart');
    const userCart = await Cart.findOne({ userId, order: false });
    if (!userCart) {
      throw new ErrorsHandlers('User cart does not exist', 404);
    }
    userCart.products = products;
    await userCart.save();
    return userCart;
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      throw new ErrorsHandlers(e.message, 404);
    throw new Error(e);
  }
}

async function getCart(userId) {
  try {
    const Cart = DatabaseMongo.getDatabaseConnection().model('Cart');
    const userCart = await Cart.findOne({ userId, order: false });
    if (!userCart) {
      return { products: [] };
    }
    return userCart;
  } catch (e) {
    throw new Error(e);
  }
}

async function deleteCart(userId) {
  try {
    const Cart = DatabaseMongo.getDatabaseConnection().model('Cart');
    await Cart.deleteOne({ userId, order: false });
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  createCart,
  addProductToCart,
  createOrder,
  getCart,
};