import { CHANGE_CURRENT_PAGE, FOLLOW_USER, SET_USERS } from '../actionTypes';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 200,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      const users = state.users;
      const user = users.find((user) => user.id === action.payload);
      const userIndex = users.indexOf(user);
      user.followed = !user.followed;
      const newUsers = [...users.slice(0, userIndex), user, ...users.slice(userIndex + 1)];

      return {
        ...state,
        users: newUsers,
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload.items],
        totalUsersCount: action.payload.totalCount,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
