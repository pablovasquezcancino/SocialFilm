import axios from "./axios.js";

export const getUserRequest = async (id) => axios.get(`/user/${id}`);