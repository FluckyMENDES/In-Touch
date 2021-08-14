import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../UI/Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';
import Preloader from '../UI/Preloader/Preloader';

const ProfileInfo = ({ profile, isLoading, status, updateUserStatus, isCurrentUser }) => {
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={classes.ProfileInfo}>
      <Avatar type="profile" img={profile.photos.large} name={profile.fullName} />
      <ProfileDesc
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        isCurrentUser={isCurrentUser}
      />
    </div>
  );
};

export default ProfileInfo;
