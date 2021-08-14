import {
  ADD_POST,
  CHANGE_NEW_POST_VALUE,
  SET_USER_PROFILE,
  SET_USER_PROFILE_IN_PROGRESS,
  SET_USER_STATUS,
} from '../actionTypes';

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    payload: profile,
  };
};

export const setUserProfileInProgress = (value) => {
  return {
    type: SET_USER_PROFILE_IN_PROGRESS,
    payload: value,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    payload: status,
  };
};

export const addPost = () => ({
  type: ADD_POST,
});

export const changeNewPostValue = (value) => ({
  type: CHANGE_NEW_POST_VALUE,
  payload: value,
});
