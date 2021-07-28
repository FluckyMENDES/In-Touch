import React from 'react';
import classes from './Aside.module.scss';
import Nav from './Nav/Nav';

const Aside = () => {
  return (
    <aside className={classes.Aside}>
      <Nav />
    </aside>
  );
};

export default Aside;
