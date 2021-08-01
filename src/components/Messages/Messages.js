import React, { useRef, useEffect } from 'react';
import classes from './Messages.module.scss';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Messages = ({ state, dispatch, messages }) => {
  const messagesEl = useRef();

  const scrollToBottom = () => {
    const messagesHeight = messagesEl.current.scrollHeight;
    messagesEl.current.scrollTop = messagesHeight;
  };

  useEffect(() => {
    scrollToBottom();
  });

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
      <ul ref={messagesEl}>{renderMessages(messages)}</ul>
      <NewMessage state={state} dispatch={dispatch} />
    </div>
  );
};

export default Messages;
