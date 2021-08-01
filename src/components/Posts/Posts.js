import React from 'react';
import classes from './Posts.module.scss';
import NewPost from './NewPost/NewPost';
import PostsList from './PostsList/PostsList';

const Posts = ({ state, posts, dispatch }) => {
  return (
    <>
      <div className={classes.Posts}>
        <h2>Posts</h2>
        <NewPost state={state} dispatch={dispatch} />
      </div>
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;
