import UsersActionTypes from './users.types';

const INITIAL_STATE = {
  usersCollection: null,
  isFetching: true,
  error: undefined
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true
      }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersCollection: action.payload,
        isFetching: false
      }
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        usersCollection: null,
        error: action.payload
      }
    default:
      return state;
  }
}

export default usersReducer;