import React from 'react';
import classes from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const Dialog = ({ userId, username, userAvatar }) => {
  return (
    <li className={classes.Dialog}>
      <NavLink to={`/dialogs/${userId}`} activeClassName={classes.active}>
        <img src={userAvatar} alt={username} />
        <span>{username}</span>
      </NavLink>
    </li>
  );
};

export default Dialog;
