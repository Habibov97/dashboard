const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  const body = req.body;

  const result = await authService.register(body);
  if (!result) return res.status(400).json({ error: 'user is NOT created' });
  res.json({ message: 'user registered successfully', result });
};

exports.login = (req, res) => {
  res.json({ message: 'ok' });
};
