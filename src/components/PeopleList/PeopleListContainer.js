import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage, followUser, setUsers } from '../../store/actions';
import axios from '../../axios/axios';
import PeopleList from './PeopleList';

const PeopleListContainer = ({
  users,
  pageSize,
  currentPage,
  totalUsersCount,
  followUserHandler,
  setUsersHandler,
  changeCurrentPageHandler,
}) => {
  useEffect(() => {
    axios.get(`/users?page=${currentPage}&count=${pageSize}`).then((response) => {
      setUsersHandler(response.data);
    });
  }, [setUsersHandler, currentPage, pageSize]);

  return (
    <PeopleList
      users={users}
      currentPage={currentPage}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      changeCurrentPageHandler={changeCurrentPageHandler}
      followUserHandler={followUserHandler}
    />
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  followUserHandler: (id) => {
    dispatch(followUser(id));
  },
  setUsersHandler: (users) => {
    dispatch(setUsers(users));
  },
  changeCurrentPageHandler: (pageNumber) => {
    dispatch(changeCurrentPage(pageNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListContainer);
