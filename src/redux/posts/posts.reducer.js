import PostsActionTypes from './posts.types';

const INITIAL_STATE = {
  postsCollection: null,
  isLoading: true,
  error: undefined
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true
      }
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsCollection: action.payload,
        isLoading: false
      }
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        postsCollection: null,
        isLoading: false
      }
    default:
      return state;
  }
}

export default postsReducer;