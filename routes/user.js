const express = require("express");
const router = express.Router();

const { getUsers, getUser, updateUser, createUser, deleteUser } = require("../controllers/user");

router.get("/users", getUsers);
router.get("/user/:slug", getUser);
router.put("/user/:slug", updateUser);
router.post("/user/:slug", createUser);
router.delete("/user/:slug", deleteUser);

module.exports = router;
