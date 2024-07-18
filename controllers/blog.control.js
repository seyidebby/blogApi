const mongoose = require("mongoose");
const blog = require("../model/blog.model.js");
const {decodeToken}=require(.../backend/utils/index.js)
async function createNew(req, res) {
  const decodetoken = decodedToken(req.headers.authorization.split(" ")[1]);
  if (!decodetoken) {
    res.status(400).json({ message: "invalid or expired token " });
  }
  const { title, description } = req.body;
  const newblog = {
    title: title,
    author: decodetoken._id,
    description: description,
  };
  const newBlog = new blog(newblog);
  await newBlog.save();
  res
    .status(201)
    .json({ message: "blog posted succesfully", newBlog: newblog });
}

async function GetAllBlog(req, res) {
  const allblog = await blog.find({});
  res.status(200).json({ message: "gotten all blog ", all: allblog });
}

module.exports = { createNew, GetAllBlog };
