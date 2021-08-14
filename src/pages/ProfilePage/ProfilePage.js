import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ profile, isLoading, status, updateUserStatus }) => {
  return (
    <>
      <ProfileInfo
        profile={profile}
        isLoading={isLoading}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <Posts />
    </>
  );
};

export default ProfilePage;
