const express = require('express')
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/ProductController")
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProduct)
router.get("/get/:id", getProduct)

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);


module.exports = router
