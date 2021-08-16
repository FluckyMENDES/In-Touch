import React from 'react';
import classes from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu/UserMenu';

const Header = ({ isAuth, login, logout }) => {
  const cls = [classes.Header];
  return (
    <header className={cls.join(' ')}>
      <div className={[classes.HeaderContainer, 'container'].join(' ')}>
        <div className={classes.wrapper}>
          <Logo fill="#1877f2" />
          <h1>IN TOUCH</h1>
        </div>
        <div className={classes.HeaderLogin}>
          {isAuth ? (
            <UserMenu login={login} logoutHandle={logout} />
          ) : (
            <Link to="/login" className={classes.HeaderSignIn}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
