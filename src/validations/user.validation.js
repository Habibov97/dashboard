const Joi = require('joi');

const username = Joi.string().min(3).max(15).alphanum().required();
const password = Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required();

const register = Joi.object({
  username,
  password,
  email: Joi.string().email().required(),
  firstName: Joi.string().trim().min(3).max(30).optional(),
  lastName: Joi.string().trim().min(3).max(30).optional(),
  gender: Joi.string().valid('male', 'female').optional(),
  height: Joi.number().min(1).optional(),
  weight: Joi.number().min(1).optional(),
  birthDate: Joi.date().max('now'),
});

const login = Joi.object({
  username,
  password,
});

const userValidation = {
  register,
  login,
};

module.exports = userValidation;
