
const mongoose = require('mongoose')

const validateMongoDbId = (id) => {
  const isValid = mongoose.Schema.Types.ObjectId.isValid(id);
  if (!isValid) throw Error("invalid id")

}

module.exports = validateMongoDbId
