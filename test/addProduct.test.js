const mongoose = require('mongoose');
const DatabaseMongo = require('../src/db/mongo');
const Config = require('../src/config/config');
const { getFakeId, generateProductMock } = require('./cart.mocks.');
const { createCart, addProductToCart, updateCart, createOrder } = require('../src/modules/cart/cart.service');
const cartRepository = require('../src/modules/cart/cart.repository');
const ErrorsHandlers = require('../src/utils/errorsHandlers');
let clearDatabase = null;
beforeAll(async () => {
  await DatabaseMongo.createDatabaseConnection(Config.getMongoDbName(), Config.getMongoUrl());
  const db = DatabaseMongo.getDatabaseConnection();
  clearDatabase = async () => {
    require('../src/db/models');
    const CartModel = db.model('Cart');
    const OrderModel = db.model('Order');
    await CartModel.deleteMany();
    await OrderModel.deleteMany();
  };
});

beforeEach(async () => {
  await clearDatabase();
});

afterEach(async () => {
  await clearDatabase();
  jest.clearAllMocks();
});
;

describe('addProductToCart', () => {
  it('should add a new product to an existing cart', async () => {
    const userId = getFakeId();
    const productData = {
      userId,
      products: [],
    };
    productData.products.push(generateProductMock());
    productData.products.push(generateProductMock());
    productData.products.push(generateProductMock());
    const existingCart = {
      _id: 'cart123',
      userId,
      order: false,
      products: [
        {
          name: 'Existing Product',
          category: 'Existing Category',
          price: 20,
          quantity: 2,
        },
      ],
    };
    const expectedCart = {
      _id: 'cart123',
      userId,
      order: false,
      products: [
        {
          name: 'Existing Product',
          category: 'Existing Category',
          price: 20,
          quantity: 2,
        },
      ],
    };
    expectedCart.products.concat(productData.products);
    cartRepository.getCart = jest.fn().mockResolvedValue(existingCart);
    cartRepository.addProductToCart = jest.fn().mockResolvedValue(expectedCart);
    const result = await addProductToCart(productData);
    expect(cartRepository.getCart).toHaveBeenCalledWith(userId);
    expect(result).toEqual(expectedCart);
  });
  it('should fail adding a new product to a cart when the cart does not exist', async () => {
    const userId = getFakeId();
    const productData = {
      userId,
      products: [],
    };
    productData.products.push(generateProductMock());
    await expect(addProductToCart(productData)).rejects.toThrow();
  });
});


