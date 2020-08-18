const router = require("express").Router();
const bcrypt = require("bcryptjs");
const signToken = require("../helpers/signToken");

const Users = require("../users/users-model");
const validateNewUser = require("../middleware/validateNewUser");
const validateExistingUser = require("../middleware/validateExistingUser");

// Register a user
router.post("/register", validateNewUser, (req, res) => {
  const user = req.body;

  // hash the password
  const rounds = 8;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  // save the user to the database
  Users.add(user)
    .then((user) => {
      res.status(201).json({ data: user });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/login", validateExistingUser, (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then((users) => {
      const user = users[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({
          message: "Welcome to our API. Here's your token...",
          token,
        });
      } else {
        res
          .status(401)
          .json({ message: "Sorry, you're not authorized to use our API." });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
