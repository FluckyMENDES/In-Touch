import { SET_AUTH_USER_DATA, SET_LOGIN_FORM_ERROR } from './../actionTypes';

const initialState = {
  id: null,
  email: null,
  login: null,
  isLoading: false,
  isAuth: false,
  loginFormError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LOGIN_FORM_ERROR:
      return {
        ...state,
        loginFormError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
