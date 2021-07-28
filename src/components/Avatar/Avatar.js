import React from 'react';
import classes from './Avatar.module.scss';
import mockAvaImg from './../../assets/img/mock-profile-avatar.jpg';

const Avatar = () => {
  return (
    <div className={classes.Avatar}>
      <img src={mockAvaImg} alt="Username" />
    </div>
  );
};

export default Avatar;
