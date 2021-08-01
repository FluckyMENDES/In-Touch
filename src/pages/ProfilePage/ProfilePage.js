import React, { useContext } from 'react';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import Posts from './../../components/Posts/Posts';
import { addPost, changeNewPostValue } from '../../store/actions';
import { StoreContext } from '../../context/StoreContext';

const ProfilePage = () => {
  const store = useContext(StoreContext);
  const { dispatch, getState } = store;

  const newPostChangeHandler = (text) => {
    dispatch(changeNewPostValue(text));
  };

  const newPostAddHandler = () => {
    dispatch(addPost());
  };

  return (
    <>
      <ProfileInfo user={getState().global.user} />
      <Posts
        state={getState().profilePage}
        newPostAddHandler={newPostAddHandler}
        newPostChangeHandler={newPostChangeHandler}
      />
    </>
  );
};

export default ProfilePage;
