const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.DB_URL);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = dbConnect;
