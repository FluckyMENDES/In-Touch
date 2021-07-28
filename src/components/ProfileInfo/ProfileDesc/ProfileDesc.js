import React from 'react';
import classes from './ProfileDesc.module.scss';
import ProfileRows from './ProfileRows/ProfileRows';

const ProfileDesc = () => {
  return (
    <div className={classes.ProfileDesc}>
      <h1>Oleg Kireev</h1>
      <hr />
      <ProfileRows />
    </div>
  );
};

export default ProfileDesc;
