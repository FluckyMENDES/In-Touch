import { setUserProfile, setUserProfileInProgress, setUserStatus } from '../actions/profile';
import profileAPI from '../../api/profile';

export const getUserProfile = (id) => (dispatch) => {
  dispatch(setUserProfileInProgress(true));
  profileAPI
    .getProfile(id)
    .then((data) => {
      dispatch(setUserProfile(data));
    })
    .finally(() => {
      dispatch(setUserProfileInProgress(false));
    });
};

export const getUserStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.setStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};
