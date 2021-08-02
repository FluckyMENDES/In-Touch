import React, { useEffect } from 'react';
import classes from './PeopleList.module.scss';
import PeopleItem from './PeopleItem/PeopleItem';
import Pagination from '../UI/Pagination/Pagination';
import { connect } from 'react-redux';
import { changeCurrentPage, followUser, setUsers } from '../../store/actions';
import axios from './../../axios/axios';

const PeopleList = ({
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

  const renderItems = (items) =>
    items.map(
      ({
        name,
        status,
        location = { country: 'Russia', city: 'Moscow' },
        followed,
        photos,
        id,
      }) => {
        const { country, city } = location;
        const img = photos.small;
        return (
          <PeopleItem
            key={id}
            id={id}
            name={name}
            country={country}
            city={city}
            status={status}
            img={img}
            followed={followed}
            followUserHandler={followUserHandler}
          />
        );
      }
    );

  return (
    <div className={classes.PeopleList}>
      <ul className={classes.list}>{renderItems(users)}</ul>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        onPaginationItemClick={changeCurrentPageHandler}
      />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
