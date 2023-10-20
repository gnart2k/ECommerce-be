const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  rating,
  uploadImages,
} = require("../controller/ProductController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.get("/", getAllProduct);
router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/rating", authMiddleware, rating);
router.get("/get/:id", getProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);

router.put("/upload/:id", uploadPhoto.array("image", 10), uploadImages);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
