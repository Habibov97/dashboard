const userModel = require('../models/user.model');
const { encodePayload } = require('../utils/jwt.utils');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError.utils');

const register = async (params) => {
  let existsUser = await userModel.findOne({
    $or: [
      {
        username: params.username,
      },
      {
        email: params.email,
      },
    ],
  });
  if (existsUser) throw new AppError('Username or email already exists', 400);

  let user = new userModel(params);
  await user.save();
  return user;
};

const logIn = async (params) => {
  let user = await userModel.findOne({ username: params.username });
  if (!user) throw new AppError('User or password is incorrect', 400);
  const passwordCompare = await bcrypt.compare(params.password, user.password);
  if (!passwordCompare) throw new AppError('User or password is incorrect', 400);

  token = encodePayload({ userId: user._id });
  user.password = undefined;
  return { token, user };
};

const authService = { register, logIn };

module.exports = authService;
