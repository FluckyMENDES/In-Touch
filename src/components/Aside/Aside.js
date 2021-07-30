import React from 'react';
import classes from './Aside.module.scss';
import Navbar from './Navbar/Navbar';
import BestFriends from './BestFriends/BestFriends';

const Aside = () => {
  return (
    <aside className={classes.Aside}>
      <Navbar />
      <BestFriends />
    </aside>
  );
};

export default Aside;
