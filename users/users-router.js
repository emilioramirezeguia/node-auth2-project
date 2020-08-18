const router = require("express").Router();

const Users = require("./users-model");
const protected = require("../middleware/protected");
const checkDepartment = require("../middleware/checkDepartment");

router.get("/", protected, checkDepartment, (req, res) => {
  const users = req.users;
  res.status(200).json({ data: users });
});

module.exports = router;
