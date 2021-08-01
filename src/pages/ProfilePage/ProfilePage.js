import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ state, user, dispatch }) => {
  return (
    <>
      <ProfileInfo user={user} />
      <Posts state={state} dispatch={dispatch} />
    </>
  );
};

export default ProfilePage;
