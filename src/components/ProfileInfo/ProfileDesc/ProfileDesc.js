import React from 'react';
import classes from './ProfileDesc.module.scss';
import ProfileRows from './ProfileRows/ProfileRows';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileDesc = ({ profile, status, updateUserStatus }) => {
  return (
    <div className={classes.ProfileDesc}>
      <h1>{profile.fullName}</h1>
      <hr />
      <ProfileStatus text={status} updateUserStatus={updateUserStatus} />
      <ProfileRows profile={profile} />
    </div>
  );
};

export default ProfileDesc;
