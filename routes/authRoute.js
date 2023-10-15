const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  handleRefreshToken,
  logout,
  updatePassword,
  loginAdmin,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controller/UserController");

const router = express.Router();

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/refresh", handleRefreshToken);
router.post("/login-admin", loginAdmin);
router.put("/save-address", authMiddleware, saveAddress);
router.post("/password", authMiddleware, updatePassword);
router.post("/cart", authMiddleware, userCart);
router.get("/getcart", authMiddleware, getUserCart);
router.get("/emptycart", authMiddleware, emptyCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/all-users", authMiddleware, isAdmin, getAllUser);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);
router.put("/update/:id", authMiddleware, isAdmin, updateUser);
router.get("/logout", logout);
router.put(
  "/order/update-status/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus,
);

module.exports = router;
