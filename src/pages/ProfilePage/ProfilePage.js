import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ profile }) => {
  return (
    <>
      <ProfileInfo profile={profile} />
      <Posts />
    </>
  );
};

export default ProfilePage;
