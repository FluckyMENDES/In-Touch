import React from 'react';
import classes from './ProfileDesc.module.scss';
import ProfileRows from './ProfileRows/ProfileRows';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileDesc = ({ profile, status, updateUserStatus, isCurrentUser }) => {
  return (
    <div className={classes.ProfileDesc}>
      <h1>{profile.fullName}</h1>
      <hr />
      <ProfileStatus
        text={status}
        updateUserStatus={updateUserStatus}
        isCurrentUser={isCurrentUser}
      />
      <ProfileRows profile={profile} />
    </div>
  );
};

export default ProfileDesc;
