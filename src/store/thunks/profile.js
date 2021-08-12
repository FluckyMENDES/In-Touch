import { setUserProfile, setUserProfileInProgress } from '../actions/profile';
import profileAPI from '../../api/profile';

export const setCurrentUser = (id) => (dispatch) => {
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
