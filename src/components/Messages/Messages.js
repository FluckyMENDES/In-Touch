import React from 'react';
import classes from './Messages.module.scss';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Messages = ({ state, dialogsListeners, messages }) => {
  const renderMessages = (messages) =>
    messages.map(({ text, authorId, date, isRead }, index) => (
      <Message
        key={`${authorId}${index}`}
        text={text}
        authorId={authorId}
        date={date}
        isRead={isRead}
      />
    ));
  return (
    <div className={classes.Messages}>
      <ul>{renderMessages(messages)}</ul>
      <NewMessage state={state} dialogsListeners={dialogsListeners} />
    </div>
  );
};

export default Messages;
