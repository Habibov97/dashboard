const Joi = require('joi');

const register = Joi.object({
  username: Joi.string().min(3).max(15).alphanum().required(),
  password: Joi.string().min(3).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().trim().min(3).max(30).optional(),
  lastName: Joi.string().trim().min(3).max(30),
  gender: Joi.string().allow('male', 'female'),
  height: Joi.number().min(1).optional(),
  weight: Joi.number().min(1).optional(),
  birthDate: Joi.date().max('now'),
});

const userValidation = {
  register,
};

module.exports = userValidation;
