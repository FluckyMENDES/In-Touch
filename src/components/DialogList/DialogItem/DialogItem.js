import React from 'react';
import classes from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ userId, username, userAvatar }) => {
  return (
    <li className={classes.DialogItem}>
      <NavLink to={`/dialogs/${userId}`} activeClassName={classes.active}>
        <img src={userAvatar} alt={username} />
        <span>{username}</span>
      </NavLink>
    </li>
  );
};

export default DialogItem;
