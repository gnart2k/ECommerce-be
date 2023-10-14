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
const { productImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.put("/rating", authMiddleware, rating);
router.get("/get/:id", getProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);

router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  productImgResize,
  uploadImages,
);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
