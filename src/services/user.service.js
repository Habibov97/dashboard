const userModel = require('../models/user.model');

const findUser = async (id) => {
  let user = await userModel.findById(id);
  return user;
};

const userService = {
  findUser,
};

module.exports = userService;
