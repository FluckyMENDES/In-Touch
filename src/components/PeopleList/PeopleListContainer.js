import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeCurrentPage,
  followUser,
  unfollowUser,
  setUsers,
  toggleUsersIsLoading,
} from '../../store/actions';
import axios from '../../axios/axios';
import Preloader from '../UI/Preloader/Preloader';
import PeopleList from './PeopleList';

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
}) => {
  useEffect(() => {
    toggleUsersIsLoading(true);
    axios
      .get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
          'API-KEY': '397d99d8-a6d4-4c8e-a265-ff34f82ec660',
        },
      })
      .then((response) => {
        toggleUsersIsLoading(false);
        setUsers(response.data);
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
});

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  changeCurrentPage,
  toggleUsersIsLoading,
})(PeopleListContainer);
