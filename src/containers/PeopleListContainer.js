import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../store/actions/users';
import Preloader from '../components/UI/Preloader/Preloader';
import PeopleList from '../components/PeopleList/PeopleList';
import { getUsers, follow, unfollow } from '../store/thunks/users';
import {
  currentPageSelector,
  followingInProgressSelector,
  isLoadingSelector,
  pageSizeSelector,
  totalUsersCountSelector,
  usersSelector,
} from '../store/selectors/users';

const PeopleListContainer = (props) => {
  const { pageSize, currentPage, isLoading, getUsers } = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [getUsers, currentPage, pageSize]);

  return <>{isLoading ? <Preloader /> : <PeopleList {...props} />}</>;
};

const mapStateToProps = (state) => ({
  users: usersSelector(state),
  pageSize: pageSizeSelector(state),
  totalUsersCount: totalUsersCountSelector(state),
  currentPage: currentPageSelector(state),
  isLoading: isLoadingSelector(state),
  followingInProgress: followingInProgressSelector(state),
});

export default connect(mapStateToProps, {
  changeCurrentPage,
  getUsers,
  follow,
  unfollow,
})(PeopleListContainer);
