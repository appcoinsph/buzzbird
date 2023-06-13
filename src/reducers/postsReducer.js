import { actionTypes } from "../utils/constants";

const initialPostsState = {
  posts: [],
};

const { GET_ALL_POSTS } = actionTypes;

const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export { initialPostsState, postsReducer };