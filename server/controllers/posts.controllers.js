import Post from "../models/post.model.js";
import User from "../models/user.model.js";

// Get all Posts
export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

// Get users posts
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.user.id; //quizás es req.params.id
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

//Create a post.
export const createPost = async (req, res) => {
  try {
    const { title, body, picturePath } = req.body;
    const newPost = new Post({
      title,
      body,
      picturePath,
      user: req.user.id,
    });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update a post
export const likePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const post = await Post.findById(id);
      const isLiked = post.likes.get(userId);
  
      if (isLiked) {
        post.likes.delete(userId);
      } else {
        post.likes.set(userId, true);
      }
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  