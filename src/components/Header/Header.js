import React from 'react';
import classes from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ isAuth, login }) => {
  const cls = [classes.Header];
  return (
    <header className={cls.join(' ')}>
      <div className={[classes.HeaderContainer, 'container'].join(' ')}>
        <Logo fill="#1877f2" />
        <h1>IN TOUCH</h1>
        <div className={classes.HeaderLogin}>
          {isAuth ? <span>{login}</span> : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
