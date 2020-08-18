const validateUser = (req, res, next) => {
  if (!req.body.username) {
    res.status(400).json({ message: "Please add a username :)" });
  } else if (!req.body.password) {
    res.status(400).json({ message: "Don't forget your password :)" });
  } else if (!req.body.department) {
    res
      .status(400)
      .json({
        message: "Please specify which department the user belongs to.",
      });
  } else {
    next();
  }
};

module.exports = validateUser;
