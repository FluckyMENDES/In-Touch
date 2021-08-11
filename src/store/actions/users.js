import {
  CHANGE_CURRENT_PAGE,
  FOLLOW_SUCCESS,
  SET_USERS,
  TOGGLE_FOLLOWING_IN_PROGRESS,
  TOGGLE_USERS_IS_LOADING,
  UNFOLLOW_SUCCESS,
} from '../actionTypes';

export const followSuccess = (id) => ({
  type: FOLLOW_SUCCESS,
  payload: id,
});

export const unfollowSuccess = (id) => ({
  type: UNFOLLOW_SUCCESS,
  payload: id,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const changeCurrentPage = (pageNumber) => ({
  type: CHANGE_CURRENT_PAGE,
  payload: pageNumber,
});

export const toggleUsersIsLoading = (isLoading) => ({
  type: TOGGLE_USERS_IS_LOADING,
  payload: isLoading,
});

export const toggleFollowingInProgress = (isLoading, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  payload: {
    isLoading,
    userId,
  },
});
