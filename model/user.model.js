const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  DOB: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model("block", schema);
module.exports = user;
