import usersAPI from '../../api/users';
import {
  setUsers,
  followSuccess,
  unfollowSuccess,
  toggleFollowingInProgress,
  toggleUsersIsLoading,
} from '../actions/users';

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleUsersIsLoading(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleUsersIsLoading(false));
    dispatch(setUsers(data));
  });
};

export const follow = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id));
  usersAPI.follow(id).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(id));
    }
    dispatch(toggleFollowingInProgress(false, id));
  });
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, id));
  usersAPI.follow(id).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(id));
    }
    dispatch(toggleFollowingInProgress(false, id));
  });
};
