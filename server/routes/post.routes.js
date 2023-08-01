import express from "express";
import {
  getPosts,
  getUserPosts,
  likePost,
  createPost,
} from "../controllers/posts.controllers.js";
import { auth } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/posts", auth, getPosts);
router.get('/:userId/posts', auth, getUserPosts);

router.post('/post', auth, createPost);

router.patch("/:id/like", auth, likePost);

export default router;