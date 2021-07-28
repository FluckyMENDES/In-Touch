import React from 'react';
import classes from './NavbarItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ title, path, exact }) => {
  console.log(classes.active);
  return (
    <li className={classes.NavbarItem}>
      <NavLink
        to={path}
        title={title}
        exact={exact}
        className={classes.link}
        activeClassName={classes.active}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
