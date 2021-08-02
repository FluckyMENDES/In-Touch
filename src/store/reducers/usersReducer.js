import { FOLLOW_USER, SET_USERS } from '../actionTypes';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      const users = state.users;
      const user = users.find((user) => user.id === action.payload);
      const userIndex = users.indexOf(user);
      user.isFollowed = !user.isFollowed;
      const newUsers = [...users.slice(0, userIndex), user, ...users.slice(userIndex + 1)];

      return {
        ...state,
        users: newUsers,
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};

export default usersReducer;
