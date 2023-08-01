import { createContext, useContext, useState, } from "react";
import {
  createPostRequest,
  getPostsRequest,
  getPostRequest,
  deletePostRequest,
  updatePostRequest,
} from "../api/post.js";

export const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequest();
    setPosts(res.data);
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      if (res.data === 204) setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      await updatePostRequest(id, post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{posts, getPost, getPosts, deletePost, createPost, updatePost}}
    >
      {children}
    </PostContext.Provider>
  );
};
