const express = require("express");
const { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser } = require("../controller/UserController");

const router = express.Router();

router.post("/register", createUser)
router.post("/login", loginUserCtrl)
router.get("/all-users", getAllUser)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)
router.put("/update/:id", updateUser)
module.exports = router
