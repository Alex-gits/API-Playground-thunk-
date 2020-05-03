import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';
import postsReducer from './posts/posts.reducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
});