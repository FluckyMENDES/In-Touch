import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <Posts />
    </>
  );
};

export default ProfilePage;
