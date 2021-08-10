import {
  ADD_POST,
  CHANGE_NEW_POST_VALUE,
  ADD_MESSAGE,
  CHANGE_NEW_MESSAGE_VALUE,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_USERS_IS_LOADING,
  SET_USER_PROFILE,
  SET_AUTH_USER_DATA,
  TOGGLE_FOLLOWING_IN_PROGRESS,
} from './actionTypes';

export const setUserProfile = (currentUserProfile) => {
  return {
    type: SET_USER_PROFILE,
    payload: currentUserProfile,
  };
};

export const addPost = () => ({
  type: ADD_POST,
});

export const changeNewPostValue = (value) => ({
  type: CHANGE_NEW_POST_VALUE,
  payload: value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeNewMessageValue = (value) => ({
  type: CHANGE_NEW_MESSAGE_VALUE,
  payload: value,
});

export const followUser = (id) => ({
  type: FOLLOW_USER,
  payload: id,
});

export const unfollowUser = (id) => ({
  type: UNFOLLOW_USER,
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

export const setAuthUserData = (id, email, login) => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, email, login },
});
