const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  expiryDate: Number,
});
const store = mongoose.model("store", schema);
module.exports = store;
