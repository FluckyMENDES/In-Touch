import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../store/actions/users';
import Preloader from '../UI/Preloader/Preloader';
import PeopleList from './PeopleList';
import { getUsers, follow, unfollow } from './../../store/reducers/usersReducer';

const PeopleListContainer = ({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  isLoading,

  changeCurrentPage,
  toggleFollowingInProgress,
  followingInProgress,
  getUsers,
  follow,
  unfollow,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [getUsers, currentPage, pageSize]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <PeopleList
          users={users}
          currentPage={currentPage}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
          changeCurrentPageHandler={changeCurrentPage}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
          toggleFollowingInProgress={toggleFollowingInProgress}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  changeCurrentPage,
  getUsers,
  follow,
  unfollow,
})(PeopleListContainer);
