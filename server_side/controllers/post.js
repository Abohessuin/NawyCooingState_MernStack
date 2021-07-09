import postMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPostsController = async (req, res) => {
  console.log("get posts");
  try {
    const postMassages = await postMessage.find();
    res.status(200).json(postMassages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPostController = async (req, res) => {
  console.log("create post");
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePostController = async (req, res) => {
  console.log("update post");
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatePost = await postMessage.findByIdAndUpdate(_id, {...post,_id}, {
    new: true,
  });
  res.status(200).json(updatePost);
};

export const deletePostController = async (req, res) => {
  console.log("Delete post");
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await postMessage.findByIdAndRemove(id);

  res.json({ message: "post deleted successfully" });
};
