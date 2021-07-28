import React, { useState } from 'react';
import classes from './Navbar.module.scss';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = () => {
  const initialState = {
    menuLinks: [
      {
        path: '/',
        title: 'Profile',
        exact: true,
      },
      {
        path: '/dialogs',
        title: 'Messages',
        exact: false,
      },
      {
        path: '/news',
        title: 'News',
        exact: false,
      },
      {
        path: '/music',
        title: 'Music',
        exact: false,
      },
      {
        path: '/settings',
        title: 'Settings',
        exact: false,
      },
    ],
  };

  const [navLinks, refreshNavLinks] = useState(initialState.menuLinks);

  const renderLinks = (links) =>
    links.map(({ title, path, exact }, index) => (
      <NavbarItem key={`${title}${index}`} path={path} title={title} exact={exact} />
    ));

  return (
    <nav className={classes.Navbar}>
      <ul>{renderLinks(navLinks)}</ul>
    </nav>
  );
};
export default Navbar;
