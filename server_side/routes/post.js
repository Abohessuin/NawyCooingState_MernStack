import express from "express";

import {
  getPostsController,
  createPostController,
  updatePostController,
  deletePostController,
} from "../controllers/post.js";
const router = express.Router();

router.get("/getposts", getPostsController);
router.post("/createpost", createPostController);
router.patch("/updatepost/:id", updatePostController);
router.delete("/deletepost/:id", deletePostController);

export default router;
