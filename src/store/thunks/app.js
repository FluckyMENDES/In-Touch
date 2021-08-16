import { setInitialized } from '../actions/app';
import { getAuthUserData } from './auth';

export const initialize = () => (dispatch) => {
  const preinitializedDispatches = [dispatch(getAuthUserData())];

  Promise.all(preinitializedDispatches).then(() => {
    dispatch(setInitialized(true));
  });
};
