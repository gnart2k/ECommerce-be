const express = require('express')
const dbConnect = require('./config/dbConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000

const authRouter = require("./routes/authRoute")
const productRouter = require("./routes/productRoute")

const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const cookieParser = require("cookie-parser")
const morgan = require("morgan")

dbConnect()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/api/v1/user", authRouter)
app.use("/api/v1/product", productRouter)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () => {
})


app.use("/api/v1", (req, res) => {
  res.send("hello")
})


