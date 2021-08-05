import React from 'react';
import classes from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={classes.Preloader}>
      <span>Загрузка...</span>
    </div>
  );
};

export default Preloader;
