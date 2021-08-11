import React from 'react';
import classes from './Posts.module.scss';
import NewPost from './NewPost/NewPost';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';
import { addPost, changeNewPostValue } from '../../store/actions/profile';

const Posts = ({ newPostValue, posts, newPostChangeHandler, newPostAddHandler }) => {
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

const mapStateToProps = (state) => ({
  newPostValue: state.profilePage.newPostValue,
  posts: state.profilePage.posts,
});

const mapDispatchToProps = (dispatch) => ({
  newPostChangeHandler: (text) => {
    dispatch(changeNewPostValue(text));
  },

  newPostAddHandler: () => {
    dispatch(addPost());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
