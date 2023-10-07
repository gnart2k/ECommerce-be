const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler")
const { generateRefreshToken } = require("../config/refreshtoken")
const jwt = require("jsonwebtoken")

const createUser = asyncHandler(async (req, res) => {

  const email = req.body.email
  const findUser = await User.findOne({ email: email })
  if (!findUser) {
    //create new user 
    const newUser = await User.create(req.body)
    res.json(newUser)
  } else {
    throw new Error("User Already Exists");
  }
})

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email })
  if (!findUser) {
    throw new Error("User does not exist");
  }

  if (await findUser.isPasswordMatched(password)) {
    const refreshToken = await generateRefreshToken(findUser?.id)
    const updateUser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken
      },
      { new: true }
    )

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000
    })
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id)
    })
  }
})
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    throw new Error(err)
  }
})

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await User.findById(id);
    res.json({
      findUser
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = { createUser, loginUserCtrl, getAllUser, getUser }

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await User.findByIdAndDelete(id);
    res.json({
      findUser
    })
  } catch (err) {
    throw new Error(err)
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    )
    res.json(updateUser)
  } catch (err) {
    throw new Error(err)
  }
})


module.exports = { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updateUser, handleRefreshToken }

