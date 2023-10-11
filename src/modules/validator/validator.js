const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const productSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().valid('Coffee', 'Equipment', 'Accessories').required(),
  price: Joi.number().required(),
  quantity: Joi.number().min(0).required(),
});

const cartSchema = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array().items(productSchema).required(),
});
const userSchema = Joi.object({
  userId: Joi.string().required()
});

const addProductToCartSchema = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array().items(productSchema).required(),
});

const orderSchema = Joi.object({
  cartId: Joi.string().required(),
  totals: Joi.object({
    products: Joi.number().required(),
    discounts: Joi.number().required(),
    shipping: Joi.number().required(),
    order: Joi.number().required(),
  }).required(),
});

module.exports = {
  productSchema,
  addProductToCartSchema,
  cartSchema,
  orderSchema,
  userSchema
};
