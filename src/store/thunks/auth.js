import axios from './../../axios/axios';
import { setAuthUserData } from '../actions/auth';

export const authUser = () => (dispatch) => {
  axios.get(`/auth/me`).then((response) => {
    const { id, email, login } = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(id, email, login));
    }
  });
};
