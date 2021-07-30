import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ posts, user }) => {
  return (
    <>
      <ProfileInfo user={user} />
      <Posts posts={posts} />
    </>
  );
};

export default ProfilePage;
