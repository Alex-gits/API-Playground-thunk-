import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const selectUsersCollection = createSelector(
  [selectUsers],
  users => users.usersCollection
);

export const selectUserFetchingStatus = createSelector(
  [selectUsers],
  users => users.isFetching
);