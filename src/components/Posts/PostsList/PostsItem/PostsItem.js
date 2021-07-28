import React from 'react';
import classes from './PostsItem.module.scss';

const PostsItem = ({ author, authorAvatarUrl, date, text }) => {
  return (
    <li className={classes.PostsItem}>
      <div>
        <img src={authorAvatarUrl} alt={author} />
        <strong>{author}</strong>
      </div>
      <div>
        <p>{text}</p>
        <time>{date}</time>
      </div>
    </li>
  );
};

export default PostsItem;
