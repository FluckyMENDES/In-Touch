import React from 'react';
import classes from './ProfileDesc.module.scss';
import ProfileRows from './ProfileRows/ProfileRows';

const ProfileDesc = ({ user }) => {
  const { firstName, lastName } = user.name;
  return (
    <div className={classes.ProfileDesc}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <hr />
      <ProfileRows user={user} />
    </div>
  );
};

export default ProfileDesc;
