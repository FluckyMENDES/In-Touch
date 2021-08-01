import React from 'react';
import classes from './PostsList.module.scss';
import PostsItem from './PostsItem/PostsItem';

const PostsList = ({ state }) => {
  const { posts } = state;
  const renderPosts = (items) => {
    return items.map(({ author, authorAvatarUrl, date, text }, index) => (
      <PostsItem
        key={`${author}${index}`}
        author={author}
        authorAvatarUrl={authorAvatarUrl}
        date={date}
        text={text}
      />
    ));
  };

  return <ul className={classes.PostsList}>{renderPosts(posts)}</ul>;
};

export default PostsList;
