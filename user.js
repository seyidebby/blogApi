const express = require("express");
const mongoose = require("mongoose");

const userApi = express();
userApi.use(express.json());
const port = 2500;

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/user");
    console.log("it is working");
  } catch (error) {
    console.log(error);
  }
}

// for userApi

connectDB();
server.listen(port, () => {
  console.log("result successful");
});
