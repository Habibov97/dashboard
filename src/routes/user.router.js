const express = require('express');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userRouter = express.Router();

userRouter.route('/me').get(authMiddleware, userController.myProfile);

module.exports = userRouter;
