import React from 'react';
import classes from './Preloader.module.scss';
import { ReactComponent as Icon } from './../../../assets/img/preloader.svg';

const Preloader = () => {
  return (
    <div className={classes.Preloader}>
      <Icon />
    </div>
  );
};

export default Preloader;
