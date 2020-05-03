import PostsActionTypes from './posts.types';

export const fetchPostsStart = () => ({
  type: PostsActionTypes.FETCH_POSTS_START
});

export const fetchPostsSuccess = posts => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = error => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: error
});

export const fetchPostsAsync = () => {
  return dispatch => {
    dispatch(fetchPostsStart());

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      dispatch(fetchPostsSuccess(posts));
    })
    .catch(error => {
      dispatch(fetchPostsFailure(error));
    })
  }
}

