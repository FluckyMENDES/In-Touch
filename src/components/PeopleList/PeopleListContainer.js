import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeCurrentPage,
  followUser,
  unfollowUser,
  setUsers,
  toggleUsersIsLoading,
  toggleFollowingInProgress,
} from '../../store/actions';
import Preloader from '../UI/Preloader/Preloader';
import PeopleList from './PeopleList';
import usersAPI from '../../api/users';

const PeopleListContainer = ({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  isLoading,
  toggleUsersIsLoading,
  followUser,
  unfollowUser,
  setUsers,
  changeCurrentPage,
  toggleFollowingInProgress,
  followingInProgress,
}) => {
  useEffect(() => {
    toggleUsersIsLoading(true);
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      toggleUsersIsLoading(false);
      setUsers(data);
    });
  }, [setUsers, currentPage, pageSize, toggleUsersIsLoading]);

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
          followUserHandler={followUser}
          unfollowUserHandler={unfollowUser}
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
  followUser,
  unfollowUser,
  setUsers,
  changeCurrentPage,
  toggleUsersIsLoading,
  toggleFollowingInProgress,
})(PeopleListContainer);
