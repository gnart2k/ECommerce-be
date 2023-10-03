const express = require("express");
const { createUser } = require("../controller/UserController");

const router = express.Router();

router.post("/register", createUser)

module.exports = router
