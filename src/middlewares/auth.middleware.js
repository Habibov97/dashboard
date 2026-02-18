const userService = require('../services/user.service');
const { decodePayload } = require('../utils/jwt.utils');

const authMiddleware = async (req, res, next) => {
  const headers = req.headers;
  let token = headers.authorization;

  token = token && token.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'unauthorized' });

  const result = decodePayload(token);
  if (!result.userId) return res.status(401).json({ error: 'unauthorized' });

  const user = userService.findUser(result.userId);
  if (!user) return res.status(401).json({ error: 'unauthorized' });

  next();
};

module.exports = authMiddleware;
