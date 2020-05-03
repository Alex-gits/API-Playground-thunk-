import { createSelector } from 'reselect';

const selectPosts = state => state.posts;

export const selectPostsCollection = createSelector(
  [selectPosts],
  posts => posts.postsCollection
);

export const selectPostsFetchingStatus = createSelector(
  [selectPosts],
  posts => posts.isLoading
);

export const selectUserPosts = userId => createSelector(
  [selectPostsCollection],
  postsCollection => (postsCollection ? postsCollection.filter(post => post.userId === +userId) : null)
)