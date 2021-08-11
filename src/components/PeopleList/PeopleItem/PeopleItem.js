import React from 'react';
import classes from './PeopleItem.module.scss';
import Avatar from '../../UI/Avatar/Avatar';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

const PeopleItem = ({
  id,
  name,
  status,
  city,
  country,
  img,
  followed,
  follow,
  unfollow,
  followingInProgress,
}) => {
  const onFollowClick = (id) => {
    follow(id);
  };

  const onUnfollowClick = (id) => {
    unfollow(id);
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
