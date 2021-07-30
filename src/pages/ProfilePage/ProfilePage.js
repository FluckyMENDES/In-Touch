import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ posts, user, addPostHandler }) => {
  return (
    <>
      <ProfileInfo user={user} />
      <Posts posts={posts} addPostHandler={addPostHandler} />
    </>
  );
};

export default ProfilePage;
