const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const { encodePayload } = require('../utils/jwt.utils');
const { DublicateError } = require('../utils/error.utils');

const register = async (params) => {
  try {
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
    if (existsUser) throw new DublicateError('username or email is already exists');

    let user = new userModel(params);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const logIn = async (params) => {
  let user = await userModel.findOne({ username: params.username });
  if (!user) throw new Error('User or password is incorrect');
  const passwordCompare = await bcrypt.compare(params.password, user.password);
  if (!passwordCompare) throw new Error('User or password is incorrect');

  token = encodePayload({ userId: user._id });
  user.password = undefined;
  return { token, user };
};

const authService = { register, logIn };

module.exports = authService;
