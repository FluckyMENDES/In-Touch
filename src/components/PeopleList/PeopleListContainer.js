import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage, followUser, setUsers, toggleUsersIsLoading } from '../../store/actions';
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
  setUsers,
  changeCurrentPage,
}) => {
  useEffect(() => {
    toggleUsersIsLoading(true);
    axios.get(`/users?page=${currentPage}&count=${pageSize}`).then((response) => {
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
  setUsers,
  changeCurrentPage,
  toggleUsersIsLoading,
})(PeopleListContainer);
