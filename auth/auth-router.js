const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");
const validateUser = require("../middleware/validateUser");

// Register a user
router.post("/register", validateUser, (req, res) => {
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

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login endpoint" });
});

module.exports = router;
