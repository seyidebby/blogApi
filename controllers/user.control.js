const mongoose = require("mongoose");

const user = require("../model/user.model.js");
async function createNewUser(req, res) {
  const newschema = new user(req.body);

  await newschema.save();

  res
    .status(201)
    .json({ message: "user gotten successfully", newschema: newschema });
}
// get all data
async function getAllUser(req, res) {
  const alluser = await user.find({});
  res.status(200).json({ message: "all users", all: alluser });
}

// get data by id
async function getUserById(req, res) {
  const id = await user.findById(req.params.id);
  res.status(200).json({
    message: "user by id",
    userid: id,
  });
}

// edit data
async function editUser(req, res) {
  const edit = await user.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({
    message: "edit by id",
    editid: edit,
  });
}

async function deleteUser(req, res) {
  await user.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "data deleted",
  });
}

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
  editUser,
  deleteUser,
};
