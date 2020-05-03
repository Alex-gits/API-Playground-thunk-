import UsersActionTypes from './users.types';

export const fetchUsersStart = () => ({
  type: UsersActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = error => ({
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload: error
});

export const fetchUsersAsync = () => {
  return dispatch => {
    dispatch(fetchUsersStart());

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error => {
      dispatch(fetchUsersFailure(error));
    });
  }
};