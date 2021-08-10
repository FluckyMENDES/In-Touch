import React from 'react';
import classes from './PeopleItem.module.scss';
import Avatar from '../../UI/Avatar/Avatar';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import axios from './../../../axios/axios';

const PeopleItem = ({
  id,
  name,
  status,
  city,
  country,
  img,
  followed,
  followUserHandler,
  unfollowUserHandler,
}) => {
  const onFollowClick = (id) => {
    axios
      .post(`/follow/${id}`, null, {
        withCredentials: true,
        headers: {
          'API-KEY': '397d99d8-a6d4-4c8e-a265-ff34f82ec660',
        },
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          followUserHandler(id);
        }
      });
  };

  const onUnfollowClick = (id) => {
    axios
      .delete(`/follow/${id}`, {
        withCredentials: true,
        headers: {
          'API-KEY': '397d99d8-a6d4-4c8e-a265-ff34f82ec660',
        },
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          unfollowUserHandler(id);
        }
      });
  };

  const buttonEl = followed ? (
    <Button type="button" onClick={onUnfollowClick.bind(null, id)} wide>
      Unfollow
    </Button>
  ) : (
    <Button kind="primary" type="button" onClick={onFollowClick.bind(null, id)} wide>
      Follow
    </Button>
  );
  return (
    <li className={classes.PeopleItem}>
      <div className={classes.leftWrapper}>
        <Link to={`/profile/${id}`}>
          <Avatar name={name} img={img} />
        </Link>
        {buttonEl}
      </div>
      <div className={classes.centerWrapper}>
        <strong>{name}</strong>
        <p>{status}</p>
      </div>
      <div className={classes.rightWrapper}>
        <span>{country}</span>
        <span>{city}</span>
      </div>
    </li>
  );
};

export default PeopleItem;
