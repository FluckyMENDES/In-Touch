import React, { useEffect } from 'react';
import classes from './PeopleList.module.scss';
import PeopleItem from './PeopleItem/PeopleItem';
import { connect } from 'react-redux';
import { followUser, setUsers } from '../../store/actions';
import axios from './../../axios/axios';

const PeopleList = ({ users, followUserHandler, setUsersHandler }) => {
  useEffect(() => {
    axios.get('/users').then((response) => {
      setUsersHandler(response.data.items);
    });
  }, [setUsersHandler]);

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
