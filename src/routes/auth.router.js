const express = require('express');
const authController = require('../controller/auth.controller');
const userValidation = require('../validations/user.validation');
const { validationMiddleware } = require('../middlewares/validation.middleware');
const authRouter = express.Router();

authRouter.route('/register').post(validationMiddleware(userValidation.register), authController.register);
authRouter.route('/login').post(validationMiddleware(userValidation.login), authController.logIn);

module.exports = authRouter;
