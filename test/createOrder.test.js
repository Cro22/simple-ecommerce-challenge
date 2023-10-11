const DatabaseMongo = require('../src/db/mongo');
const Config = require('../src/config/config');
const { getFakeId } = require('./cart.mocks.');
const { createCart, addProductToCart, createOrder } = require('../src/modules/cart/cart.service');
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
describe('createOrder', () => {
  it('should calculate order totals correctly when user has accessories', async () => {
    const userId = getFakeId();
    const cartData = { products: [], userId };

    await createCart(cartData);
    const existingCart = {
      userId,
      products: [
        { name: 'Product 1', category: 'Accessories', price: 50, quantity: 1 },
        { name: 'Product 2', category: 'Accessories', price: 30, quantity: 1 },
      ],
    };
    await addProductToCart(existingCart);
    const result = await createOrder(userId);
    expect(result.order.totals.subTotal).toBe(80);
    expect(result.order.totals.products).toBe(2);
    expect(result.order.totals.discounts).toBe(8);
    expect(result.order.totals.shipping).toBe(10);
    expect(result.order.totals.order).toBe(82);
  });


  it('should add a product to cart when user has 2 or more coffee products', async () => {
    const userId = getFakeId();
    const cartData = { products: [], userId };

    await createCart(cartData);
    const existingCart = {
      userId,
      products: [
        { name: 'Product 1', category: 'Coffee', price: 50, quantity: 1 },
        { name: 'Product 2', category: 'Coffee', price: 30, quantity: 1 },
      ],
    };
    await addProductToCart(existingCart);
    const result = await createOrder(userId);
    expect(result.order.totals.subTotal).toBe(80);
    expect(result.order.totals.products).toBe(3);
    expect(result.order.totals.discounts).toBe(0);
    expect(result.order.totals.shipping).toBe(10);
    expect(result.order.totals.order).toBe(90);
  });

  it('should throw an error if user cart does not exist', async () => {
    await expect(createOrder('user123')).rejects.toThrow(ErrorsHandlers);
  });


  it('should calculate order totals correctly when user has no accessories', async () => {
    const userId = getFakeId();
    const cartData = { products: [], userId };

    await createCart(cartData);
    const existingCart = {
      userId,
      products: [
        { name: 'Product 1', category: 'Coffee', price: 10, quantity: 1 },
        { name: 'Product 1', category: 'Accessories', price: 10, quantity: 1 },
        { name: 'Product 2', category: 'Equipment', price: 20, quantity: 1 },
      ],
    };
    await addProductToCart(existingCart);
    const result = await createOrder(userId);
    expect(result.order.totals.subTotal).toBe(40);
    expect(result.order.totals.products).toBe(3);
    expect(result.order.totals.discounts).toBe(0);
    expect(result.order.totals.shipping).toBe(10);
    expect(result.order.totals.order).toBe(50);
  });
  it('should calculate order totals correctly when user has 3 or more equipment products', async () => {
    const userId = getFakeId();
    const cartData = { products: [], userId };

    await createCart(cartData);
    const existingCart = {
      userId,
      products: [
        { name: 'Product 1', category: 'Equipment', price: 10, quantity: 2 },
        { name: 'Product 2', category: 'Equipment', price: 20, quantity: 2 },
        { name: 'Product 3', category: 'Equipment', price: 30, quantity: 1 },
      ],
    };
    await addProductToCart(existingCart);

    const result = await createOrder(userId);
    expect(result.order.totals.subTotal).toBe(90);
    expect(result.order.totals.products).toBe(5);
    expect(result.order.totals.discounts).toBe(0);
    expect(result.order.totals.shipping).toBe(0);
    expect(result.order.totals.order).toBe(90);
  });

});

