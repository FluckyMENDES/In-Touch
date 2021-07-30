import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';

const ProfileInfo = ({ user }) => {
  return (
    <div className={classes.ProfileInfo}>
      <Avatar type="big" img="" />
      <ProfileDesc user={user} />
    </div>
  );
};

export default ProfileInfo;
