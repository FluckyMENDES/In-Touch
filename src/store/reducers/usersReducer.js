import usersAPI from '../../api/users';
import {
  setUsers,
  followSuccess,
  unfollowSuccess,
  toggleFollowingInProgress,
  toggleUsersIsLoading,
} from '../actions/users';
import {
  SET_USERS,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_FOLLOWING_IN_PROGRESS,
  TOGGLE_USERS_IS_LOADING,
} from '../actionTypes';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 200,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS:
      const users = state.users;
      const user = users.find((user) => user.id === action.payload);
      const userIndex = users.indexOf(user);
      user.followed = true;
      const newUsers = [...users.slice(0, userIndex), user, ...users.slice(userIndex + 1)];

      return {
        ...state,
        users: newUsers,
      };
    case UNFOLLOW_SUCCESS: {
      const users = state.users;
      const user = users.find((user) => user.id === action.payload);
      const userIndex = users.indexOf(user);
      user.followed = false;
      const newUsers = [...users.slice(0, userIndex), user, ...users.slice(userIndex + 1)];

      return {
        ...state,
        users: newUsers,
      };
    }
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
    case TOGGLE_USERS_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.payload.isLoading
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter((id) => id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleUsersIsLoading(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleUsersIsLoading(false));
    dispatch(setUsers(data));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id));
  usersAPI.follow(id).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(id));
    }
    toggleFollowingInProgress(false, id);
  });
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id));
  usersAPI.follow(id).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(id));
    }
    toggleFollowingInProgress(false, id);
  });
};

export default usersReducer;
