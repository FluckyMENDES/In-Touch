import React from 'react';
import classes from './Aside.module.scss';
import Navbar from './Navbar/Navbar';

const Aside = () => {
  return (
    <aside className={classes.Aside}>
      <Navbar />
    </aside>
  );
};

export default Aside;
