import * as api from "../api";

export const getposts = () => async (dispatch) => {
  try {
    const { data } = await api.getPostsRequest();
    dispatch({ type: "FETCH_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createpost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPostRequest(post);

    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatepost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePostRequest(id, post);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletepost = (id) => async (dispatch) => {
  try {
    await api.deletePostRequest(id);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error);
  }
};
