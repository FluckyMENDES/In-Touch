import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../store/actions/users';
import Preloader from '../components/UI/Preloader/Preloader';
import PeopleList from '../components/PeopleList/PeopleList';
import { getUsers, follow, unfollow } from '../store/thunks/users';

const PeopleListContainer = (props) => {
  const { pageSize, currentPage, isLoading, getUsers } = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [getUsers, currentPage, pageSize]);

  return <>{isLoading ? <Preloader /> : <PeopleList {...props} />}</>;
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
