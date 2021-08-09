import React from 'react';
import classes from './PeopleItem.module.scss';
import Avatar from '../../UI/Avatar/Avatar';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

const PeopleItem = ({ id, name, status, city, country, img, followed, followUserHandler }) => {
  const buttonEl = (
    <Button
      kind={followed ? '' : 'primary'}
      type="button"
      onClick={followUserHandler.bind(this, id)}
      wide>
      {followed ? 'Unfollow' : 'Follow'}
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
