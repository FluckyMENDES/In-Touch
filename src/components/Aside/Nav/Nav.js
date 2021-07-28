import React from 'react';
import classes from './Nav.module.scss';

const Nav = () => (
  <nav className={classes.Nav}>
    <ul>
      <li>Profile</li>
      <li>Messages</li>
      <li>News</li>
      <li>Music</li>
      <li>Settings</li>
    </ul>
  </nav>
);

export default Nav;
