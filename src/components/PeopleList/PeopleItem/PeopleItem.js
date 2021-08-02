import React from 'react';
import classes from './PeopleItem.module.scss';
import Avatar from '../../UI/Avatar/Avatar';
import Button from '../../UI/Button/Button';

const PeopleItem = ({
  id,
  firstName,
  lastName,
  status,
  city,
  country,
  isFollowed,
  followUserHandler,
}) => {
  const fullName = `${firstName} ${lastName}`;
  const buttonEl = (
    <Button
      kind={isFollowed ? '' : 'primary'}
      type="button"
      onClick={followUserHandler.bind(this, id)}
      wide>
      {isFollowed ? 'Unfollow' : 'Follow'}
    </Button>
  );
  return (
    <li className={classes.PeopleItem}>
      <div className={classes.leftWrapper}>
        <Avatar name={fullName} />
        {buttonEl}
      </div>
      <div className={classes.centerWrapper}>
        <strong>{fullName}</strong>
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
