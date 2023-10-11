const Validators = require('./validator/validator');
const { respondWithError } = require('../utils/responses');

module.exports = function(validator) {
  if (!Validators[validator])
    throw new Error(`'${validator}' validator is not exist`);

  return async function(req, res, next) {
    try {
      req.body = await Validators[validator].validateAsync(req.body);
      next();
    } catch (err) {
      if (err.isJoi) {
        respondWithError(res, 422, err.message);
      } else {
        respondWithError(res, 500);
      }
    }
  };
};
