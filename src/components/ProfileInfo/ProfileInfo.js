import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';

const ProfileInfo = ({ user }) => {
  const username = `${user.name.firstName} ${user.name.lastName}`;

  return (
    <div className={classes.ProfileInfo}>
      <Avatar type="profile" img={user.avatar.url} name={username} />
      <ProfileDesc user={user} />
    </div>
  );
};

export default ProfileInfo;
