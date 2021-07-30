import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <ProfileInfo />
      <Posts posts={posts} />
    </>
  );
};

export default ProfilePage;
