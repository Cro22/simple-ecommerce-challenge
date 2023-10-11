
const DatabaseMongo = require('../src/db/mongo');
const Config = require('../src/config/config');
const { getFakeId } = require('./cart.mocks.');
const { updateCart } = require('../src/modules/cart/cart.service');
const cartRepository = require('../src/modules/cart/cart.repository');
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
describe('updateCart', () => {
  it('should update existing product quantity, price and category when product exists in cart', async () => {
    const userId = getFakeId();
    const productData = {
      userId,
      products: [
        {
          name: 'Existing Product',
          category: 'Existing Category',
          price: 20,
          quantity: 3,
        },
      ],
    };
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
          quantity: 3,
        },
      ],
    };
    cartRepository.getCart = jest.fn().mockResolvedValue(existingCart);
    cartRepository.addProductToCart = jest.fn().mockResolvedValue(expectedCart);
    const result = await updateCart(productData);
    expect(cartRepository.getCart).toHaveBeenCalledWith(userId);
    expect(result).toEqual(expectedCart);
  });

  it('should add new product to cart when product does not exist in cart', async () => {
    const userId = getFakeId();
    const productData = {
      userId,
      products: [
        {
          name: 'New Product',
          category: 'New Category',
          price: 30,
          quantity: 1,
        },
      ],
    };
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
        {
          name: 'New Product',
          category: 'New Category',
          price: 30,
          quantity: 1,
        },
      ],
    };
    cartRepository.getCart = jest.fn().mockResolvedValue(existingCart);
    cartRepository.addProductToCart = jest.fn().mockResolvedValue(expectedCart);
    const result = await updateCart(productData);
    expect(cartRepository.getCart).toHaveBeenCalledWith(userId);
    expect(result).toEqual(expectedCart);
  });
});