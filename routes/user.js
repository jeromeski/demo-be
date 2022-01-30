const express = require("express");
const router = express.Router();

const { getUsers, getUser } = require("../controllers/user");

router.get("/users", getUsers);
router.get("/user/:slug", getUser);

module.exports = router;
