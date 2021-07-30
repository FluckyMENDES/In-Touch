import React from 'react';
import classes from './PostsItem.module.scss';
import Avatar from '../../../Avatar/Avatar';

const PostsItem = ({ author, authorAvatarUrl, date, text }) => {
  return (
    <li className={classes.PostsItem}>
      <Avatar img={authorAvatarUrl} name={author} size={50} withUsername />
      <div>
        <p>{text}</p>
        <time>{date}</time>
      </div>
    </li>
  );
};

export default PostsItem;
