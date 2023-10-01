const { default: mongoose } = require('mongoose')

const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      process.env.DB_URL
    )
    console.log("db connected")
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = dbConnect
