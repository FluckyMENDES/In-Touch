import React from 'react';
import classes from './BestFriends.module.scss';
import Avatar from './../../UI/Avatar/Avatar';

const BestFriends = () => {
  return (
    <section className={classes.BestFriends}>
      <h3>Best friens:</h3>
      <ul>
        <li>
          <Avatar name="Oleg Kireev" size={40} withUsername />
        </li>
        <li>
          <Avatar name="testuser" size={40} withUsername />
        </li>
        <li>
          <Avatar name="testuser" size={40} withUsername />
        </li>
        <li>
          <Avatar name="testuser" size={40} withUsername />
        </li>
      </ul>
    </section>
  );
};

export default BestFriends;
