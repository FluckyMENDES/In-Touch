import React from 'react';
import classes from './PeopleItem.module.scss';
import Avatar from '../../UI/Avatar/Avatar';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import followAPI from '../../../api/follow';

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
  followingInProgress,
  toggleFollowingInProgress,
}) => {
  const onFollowClick = (id) => {
    toggleFollowingInProgress(true, id);
    followAPI.follow(id).then((response) => {
      if (response.data.resultCode === 0) {
        followUserHandler(id);
      }
      toggleFollowingInProgress(false, id);
    });
  };

  const onUnfollowClick = (id) => {
    toggleFollowingInProgress(true, id);
    followAPI.unfollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        unfollowUserHandler(id);
      }
      toggleFollowingInProgress(false, id);
    });
  };

  const buttonEl = followed ? (
    <Button
      disabled={followingInProgress.some((userId) => userId === id)}
      type="button"
      onClick={onUnfollowClick.bind(null, id)}
      wide>
      Unfollow
    </Button>
  ) : (
    <Button
      disabled={followingInProgress.some((userId) => userId === id)}
      kind="primary"
      type="button"
      onClick={onFollowClick.bind(null, id)}
      wide>
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
