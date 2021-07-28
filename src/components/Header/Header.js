import React from 'react';
import classes from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/img/logo.svg';

const Header = () => {
  const cls = [classes.Header];
  return (
    <header className={cls.join(' ')}>
      <div className={[classes.HeaderContainer, 'container'].join(' ')}>
        <Logo fill="#1877f2" />
        <h1>IN TOUCH</h1>
      </div>
    </header>
  );
};

export default Header;
