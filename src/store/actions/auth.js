import { SET_AUTH_USER_DATA, SET_LOGIN_FORM_ERROR } from '../actionTypes';

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setLoginFormError = (message) => ({
  type: SET_LOGIN_FORM_ERROR,
  payload: message,
});
