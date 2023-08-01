import axios from "./axios.js";



export const getPostsRequest = async () => axios.get('/posts');

export const getPostRequest = async (id) => axios.get(`/post/${id}`);

export const createPostRequest = async (post) => axios.post('/post', post);

export const updatePostRequest = async (post) => axios.put(`/post/${post._id}`, post);

export const deletePostRequest = async (id) => axios.delete(`/post/${id}`);

