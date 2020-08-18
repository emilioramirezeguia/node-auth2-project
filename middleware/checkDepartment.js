const db = require("../users/users-model");

module.exports = (req, res, next) => {
  db.findBy({ department: req.decodedToken.department })
    .then((users) => {
      req.users = users;
      next();
    })
    .catch((error) => {
      res.status(404).json({ error: "Sorry, that department doesn't exist." });
    });
};
