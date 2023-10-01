const express = require('express')
const dbConnect = require('./config/dbConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
dbConnect()
app.use("/api/v1/", (req, res) => {
  res.send("hello")
})
app.listen(PORT, () => {
  console.log(`${PORT}`)
})
