const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  const body = req.body;

  try {
    const result = await authService.register(body);
    if (!result) throw new Error('something went wrong, user is not registered');
    res.json({ message: 'user registered successfully', result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logIn = async (req, res) => {
  try {
    res.json(await authService.logIn(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
