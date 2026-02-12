const userModel = require('../models/user.model');

const register = async (body) => {
  try {
    const user = await userModel.create(body);
    return user;
  } catch (error) {
    console.log('Something went wrong by database', error);
    return false;
  }
};

const authService = { register };

module.exports = authService;
