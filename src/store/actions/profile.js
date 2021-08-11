import { ADD_POST, CHANGE_NEW_POST_VALUE, SET_USER_PROFILE } from '../actionTypes';

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
