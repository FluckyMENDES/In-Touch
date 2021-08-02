import React, { useEffect } from 'react';
import classes from './PeopleList.module.scss';
import PeopleItem from './PeopleItem/PeopleItem';
import { connect } from 'react-redux';
import { followUser, setUsers } from '../../store/actions';

const PeopleList = ({ users, followUserHandler, setUsersHandler }) => {
  useEffect(() => {
    setUsersHandler([
      {
        id: 1,
        username: {
          firstName: 'Oleg',
          lastName: 'Kireev',
          login: 'flucky',
        },
        region: {
          country: 'Russia',
          city: 'Moscow',
        },
        status: 'Lorem ipsum dolor eves',
        isFollowed: false,
      },
      {
        id: 2,
        username: {
          firstName: 'Ivan',
          lastName: 'Ivanyan',
          login: 'policeman',
        },
        region: {
          country: 'Russia',
          city: 'Moscow',
        },
        status: 'Lorem ipsum',
        isFollowed: false,
      },
      {
        id: 3,
        username: {
          firstName: 'Bruce',
          lastName: 'Wayne',
          login: 'Notbatman',
        },
        region: {
          country: 'USA',
          city: 'Gotham City',
        },
        status: 'Why do you wanna kill me?',
        isFollowed: true,
      },
    ]);
  }, [setUsersHandler]);

  const renderItems = (items) =>
    items.map(({ username, status, region, isFollowed, id }) => {
      const { firstName, lastName } = username;
      const { country, city } = region;
      return (
        <PeopleItem
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          country={country}
          city={city}
          status={status}
          isFollowed={isFollowed}
          followUserHandler={followUserHandler}
        />
      );
    });

  return (
    <div className={classes.PeopleList}>
      <ul>{renderItems(users)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  followUserHandler: (id) => {
    dispatch(followUser(id));
  },
  setUsersHandler: (users) => {
    dispatch(setUsers(users));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
