import React from 'react';
import classes from './Layout.module.scss';
import Header from '../../containers/HeaderContainer';
import Aside from '../Aside/Aside';

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <Aside />
    <main>{children}</main>
  </div>
);

export default Layout;
