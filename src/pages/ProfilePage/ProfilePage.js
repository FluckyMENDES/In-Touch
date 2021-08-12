import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ profile, isLoading }) => {
  return (
    <>
      <ProfileInfo profile={profile} isLoading={isLoading} />
      <Posts />
    </>
  );
};

export default ProfilePage;
