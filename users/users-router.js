const router = require("express").Router();

const Users = require("./users-model");
const protected = require("../middleware/protected");

router.get("/", protected, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
