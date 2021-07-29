import React from 'react';
import classes from './Message.module.scss';

const Message = ({ text, authorId, date, isRead }) => {
  const cls = [classes.Message];
  authorId !== 1 && cls.push(classes.alternate);

  return (
    <li className={cls.join(' ')}>
      <img src={'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg'} alt={authorId} />
      <div>
        <strong>Username</strong>
        <p>{text}</p>
        <span>{date}</span>
      </div>
    </li>
  );
};

export default Message;
