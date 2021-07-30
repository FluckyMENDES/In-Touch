import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ state, posts, user, profileListeners }) => {
  return (
    <>
      <ProfileInfo user={user} />
      <Posts state={state} posts={posts} profileListeners={profileListeners} />
    </>
  );
};

export default ProfilePage;
