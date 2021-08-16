import authAPI from '../../api/auth';
import { setAuthUserData, setLoginFormError } from '../actions/auth';

export const getAuthUserData = () => (dispatch) => {
  authAPI.getProfile().then((response) => {
    const { id, email, login } = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(setLoginFormError(response.data.messages.join(' ')));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
