import React from 'react';
import classes from './ProfileDesc.module.scss';
import ProfileRows from './ProfileRows/ProfileRows';

const ProfileDesc = ({ profile }) => {
  // const { firstName, lastName } = user.name;
  return (
    <div className={classes.ProfileDesc}>
      <h1>{profile.fullName}</h1>
      <hr />
      <ProfileRows profile={profile} />
    </div>
  );
};

export default ProfileDesc;
