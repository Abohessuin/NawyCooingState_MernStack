import axios from "axios";

const base_URL="http://localhost:5000/posts";
const getPosts_URL = "http://localhost:5000/posts/getposts";
const CreatePost_URL = "http://localhost:5000/posts/createpost";


export const getPostsRequest =()=>{
   return axios.get(getPosts_URL);
}
export const createPostRequest = async (newPost) => {
  return await axios.post(CreatePost_URL, newPost);
};

export const updatePostRequest = async (postID,updatedPost) => {
  return await axios.patch(`${base_URL}/updatepost/${postID}`,updatedPost);

}
export const deletePostRequest = async (postID)=>{
  await axios.delete(`${base_URL}/deletepost/${postID}`);

}