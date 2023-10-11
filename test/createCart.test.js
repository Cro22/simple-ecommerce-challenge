const DatabaseMongo = require('../src/db/mongo');
const Config = require('../src/config/config');
const { getFakeId } = require('./cart.mocks.');
const { createCart } = require('../src/modules/cart/cart.service');
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

describe('createCart', () => {
  it('should create a cart with valid cartData', async () => {
    const cartData = { products: [], userId: getFakeId() };

    const result = await createCart(cartData);

    expect(result).toBeDefined();
  });

  it('should throw an error if cartData is not provided', async () => {
    const cartData = undefined;

    await expect(createCart(cartData)).rejects.toThrow();
  });

  it('should throw an error if cartData is not an object', async () => {
    const cartData = 'not an object';

    await expect(createCart(cartData)).rejects.toThrow();
  });
});