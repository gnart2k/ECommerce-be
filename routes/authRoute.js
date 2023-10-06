const express = require("express");
const { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser } = require("../controller/UserController");

const router = express.Router();

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
router.post("/register", createUser)
router.post("/login", loginUserCtrl)
router.get("/all-users", authMiddleware, isAdmin, getAllUser)
router.get("/:id", authMiddleware, isAdmin, getUser)
router.delete("/:id", authMiddleware, isAdmin, deleteUser)
router.put("/update/:id", authMiddleware, isAdmin, updateUser)
module.exports = router
