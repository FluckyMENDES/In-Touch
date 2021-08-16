import { SET_INITIALIZED } from '../actionTypes';

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
