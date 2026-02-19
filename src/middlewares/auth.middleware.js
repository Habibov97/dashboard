const userService = require('../services/user.service');
const AppError = require('../utils/appError.utils');
const { decodePayload } = require('../utils/jwt.utils');

const authMiddleware = async (req, res, next) => {
  const headers = req.headers;
  let token = headers.authorization;

  token = token && token.split(' ')[1];
  if (!token) throw new AppError('Unauthorized', 401);

  const result = decodePayload(token);
  if (!result.userId) throw new AppError('Unauthorized', 401);

  const user = userService.findUser(result.userId);
  if (!user) throw new AppError('Unauthorized', 401);

  next();
};

module.exports = authMiddleware;
