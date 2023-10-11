const cartRepository = require('./cart.repository');
const ErrorsHandlers = require('../../utils/errorsHandlers');

async function createCart(cartData) {
  try {
    const cart = await cartRepository.createCart(cartData);
    return cart._id;
  } catch (e) {
    throw new Error(e);
  }
}

async function addProductToCart(productData) {
  try {
    const cart = await cartRepository.getCart(productData.userId);
    for (const product of productData.products) {
      const productoExistente = cart.products.find(
        (p) =>
          p.name === product.name &&
          p.category === product.category &&
          p.price === product.price,
      );
      if (productoExistente) {
        productoExistente.quantity += product.quantity;
      } else {
        cart.products.push({ ...product });
      }
    }
    return await cartRepository.addProductToCart(productData.userId, cart.products);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      throw new ErrorsHandlers(e.message, 404);
    throw new Error(e);
  }
}

async function updateCart(productData) {
  try {
    const cart = await cartRepository.getCart(productData.userId);
    for (const product of productData.products) {
      const productoExistente = cart.products.find(
        (p) =>
          p.name === product.name,
      );
      if (productoExistente) {
        productoExistente.quantity = product.quantity;
        productoExistente.price = product.price;
        productoExistente.category = product.category;
      } else {
        cart.products.push({ ...product });
      }
    }
    return await cartRepository.addProductToCart(productData.userId, cart.products);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      throw new ErrorsHandlers(e.message, 404);
    throw new Error(e);
  }
}

async function createOrder(userId) {
  try {
    const cart = await cartRepository.getCart(userId);
    if (!cart.products.length) {
      throw new ErrorsHandlers('User cart does not exist', 404);
    }
    const order = {
      cartId: cart._id,
      totals: {
        products: 0,
        discounts: 0,
        shipping: 0,
        order: 0,
      },
    };

    const coffeeProducts = cart.products.filter((product) => product.category === 'Coffee');
    const coffeeProductCount = coffeeProducts.reduce((total, product) => total + product.quantity, 0);

    const equipmentProducts = cart.products.filter((product) => product.category === 'Equipment');
    const equipmentProductCount = equipmentProducts.reduce((total, product) => total + product.quantity, 0);
    const freeShipping = equipmentProductCount > 3 ? 1 : 0;

    const accessoriesProducts = cart.products.filter((product) => product.category === 'Accessories');
    const accessoriesTotalPrice = accessoriesProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
    const discount = accessoriesTotalPrice > 70 ? 0.1 * accessoriesTotalPrice : 0;

    order.totals.subTotal = cart.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
    order.totals.products = cart.products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
    order.totals.discounts = discount;
    order.totals.shipping = freeShipping ? 0 : 10;
    order.totals.order = order.totals.subTotal - discount + order.totals.shipping;
    if (coffeeProductCount >= 2) {
      order.totals.products += 1;
      coffeeProducts[0].quantity += 1;
      await updateCart({ userId, products: [coffeeProducts[0]] });
    }

    return cartRepository.createOrder(order);
  } catch (e) {
    if (e instanceof ErrorsHandlers)
      throw new ErrorsHandlers(e.message, 404);
    throw new Error(e);
  }
}

module.exports = {
  createCart,
  addProductToCart,
  updateCart,
  createOrder,
};