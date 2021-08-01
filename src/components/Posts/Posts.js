import React from 'react';
import classes from './Posts.module.scss';
import NewPost from './NewPost/NewPost';
import PostsList from './PostsList/PostsList';

const Posts = ({ state, newPostChangeHandler, newPostAddHandler }) => {
  const { newPostValue, posts } = state;
  return (
    <>
      <div className={classes.Posts}>
        <h2>Posts</h2>
        <NewPost
          newPostValue={newPostValue}
          newPostChangeHandler={newPostChangeHandler}
          newPostAddHandler={newPostAddHandler}
        />
      </div>
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;
