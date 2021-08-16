import { SET_INITIALIZED } from '../actionTypes';

export const setInitialized = (isInitialized) => ({
  type: SET_INITIALIZED,
  payload: isInitialized,
});
