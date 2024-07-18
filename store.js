const express = require("express");
const mongoose = require("mongoose");

const storeApi = express();
storeApi.use(express.json());
const port = 2003;

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/store");
  } catch (error) {
    console.log(error);
  }
}
