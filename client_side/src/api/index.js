import axios from "axios";

const base_URL = "https://nawycooingstate.herokuapp.com/posts";
const getPosts_URL = "https://nawycooingstate.herokuapp.com/posts/getposts";
const CreatePost_URL = "https://nawycooingstate.herokuapp.com/posts/createpost";

export const getPostsRequest = () => {
  return axios.get(getPosts_URL);
};
export const createPostRequest = async (newPost) => {
  return await axios.post(CreatePost_URL, newPost);
};

export const updatePostRequest = async (postID, updatedPost) => {
  return await axios.patch(`${base_URL}/updatepost/${postID}`, updatedPost);
};
export const deletePostRequest = async (postID) => {
  await axios.delete(`${base_URL}/deletepost/${postID}`);
};
