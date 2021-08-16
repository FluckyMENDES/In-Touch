import { SET_AUTH_USER_DATA } from '../actionTypes';

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, email, login, isAuth },
});
