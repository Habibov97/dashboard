const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  const body = req.body;
  const result = await authService.register(body);

  res.json({ message: 'user registered successfully', result });
};

exports.logIn = async (req, res) => {
  res.json(await authService.logIn(req.body));
};
