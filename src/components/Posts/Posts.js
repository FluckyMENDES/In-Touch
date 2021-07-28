import React from 'react';
import classes from './Posts.module.scss';
import NewPost from './NewPost/NewPost';
import PostsList from './PostsList/PostsList';

const Posts = () => {
  return (
    <>
      <div className={classes.Posts}>
        <h2>Posts</h2>
        <NewPost />
      </div>
      <PostsList />
    </>
  );
};

export default Posts;
