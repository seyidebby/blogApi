const express = require("express");
const mongoose = require("mongoose");
const blog = require("./model/blog.model.js");
const { createNew, GetAllBlog } = require("./controllers/blog.control.js");
const store = require("./model/store.model.js");
const {
  createNewStore,
  getAllStore,
  getStoreById,
  editStore,
  deleteStore,
} = require("./controllers/store.control.js");
const user = require("./model/user.model.js");
const {
  createNewUser,
  getAllUser,
  getUserById,
  editUser,
  deleteUser,
} = require("./controllers/user.control.js");

const server = express();
server.use(express.json());
const port = 2004;

// blogApi.get("/", (req, res) => {
//   res.json({ message: "my name is seyi" });
// });

async function connectMG() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogApi");
    console.log("workings");
  } catch (err) {
    console.log(err);
  }
}

// for blogApi
server.post("/blog", createNew);
server.get("/blog", GetAllBlog);
// for storeApi
server.post("/store", createNewStore);
// get all data
server.get("/store", getAllStore);
// get data by id
server.get("/store/:id", getStoreById);

// edit data
server.patch("/store/:id", editStore);
// delete data
server.delete("/store/:id", deleteStore);

// for users
server.post("/user", createNewUser);
// get all data

server.get("/user", getAllUser);
// get data by id
server.get("/user/:id", getUserById);
// edit data
server.patch("/user/:id", editUser);
// delete data
server.delete("/user/:id", deleteUser);

connectMG();
server.listen(port, () => {
  console.log("done successfully");
});
