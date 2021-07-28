import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';

const ProfileInfo = () => {
  return (
    <div className={classes.ProfileInfo}>
      <Avatar />
      <ProfileDesc />
    </div>
  );
};

export default ProfileInfo;
