import React from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';

const ProfilePage = ({ state, posts, user, addPostHandler, changeNewPostValueHandler }) => {
  return (
    <>
      <ProfileInfo user={user} />
      <Posts
        state={state}
        posts={posts}
        addPostHandler={addPostHandler}
        changeNewPostValueHandler={changeNewPostValueHandler}
      />
    </>
  );
};

export default ProfilePage;
