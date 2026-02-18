const myProfile = (req, res) => {
  res.json(req.user);
};

const userController = {
  myProfile,
};

module.exports = userController;
