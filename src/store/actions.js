import {
  ADD_POST,
  CHANGE_NEW_POST_VALUE,
  ADD_MESSAGE,
  CHANGE_NEW_MESSAGE_VALUE,
  FOLLOW_USER,
  SET_USERS,
  CHANGE_CURRENT_PAGE,
  TOGGLE_USERS_IS_LOADING,
} from './actionTypes';

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
