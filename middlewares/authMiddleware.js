const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded?.id)
        req.user = user;
        next()

      }
    } catch (err) {
      throw new Error("token expired, please log in again")
    }
  } else {
    throw new Error("no token attached to header")
  }
})

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email })
  if (adminUser.role !== 'ADMIN') {
    throw new Error("you not have permission")
  }

  next();
})

module.exports = { authMiddleware, isAdmin }
