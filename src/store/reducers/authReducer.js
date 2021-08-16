import { SET_AUTH_USER_DATA } from './../actionTypes';

const initialState = {
  id: null,
  email: null,
  login: null,
  isLoading: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
