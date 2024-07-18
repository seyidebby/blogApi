const mongoose = require("mongoose");
const store = require("../model/store.model.js");

async function createNewStore(req, res) {
  const newblow = new store(req.body);
  await newblow.save();

  res.status(201).json({
    message: "store product complete",
    blow: newblow,
  });
}
// get all data
async function getAllStore(req, res) {
  const allstore = await store.find({});
  res.status(200).json({
    message: "all products in store gotten successfully",
    store: allstore,
  });
}
// get data by id

async function getStoreById(req, res) {
  const idstore = await store.findById(req.params.id);
  res.status(200).json({ message: "gotten data by id", store: idstore });
}
// edit data
async function editStore(req, res) {
  const editbyid = await store.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({
    message: "patch product done",
    edit: editbyid,
  });
}
// delete data
async function deleteStore(req, res) {
  await store.findByIdAndDelete(req.params.id);
  res.status(207).json({
    message: "data deleted successfully",
  });
}
module.exports = {
  createNewStore,
  getAllStore,
  getStoreById,
  editStore,
  deleteStore,
};
