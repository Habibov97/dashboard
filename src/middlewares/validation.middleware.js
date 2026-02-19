const AppError = require('../utils/appError.utils');

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    let result = schema.validate(req.body);
    if (result.error) throw new AppError(result.error.details?.[0]?.message, 400);
    next();
  };
};

module.exports = { validationMiddleware };
