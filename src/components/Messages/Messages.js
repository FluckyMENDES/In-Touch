import React, { useRef, useEffect } from 'react';
import classes from './Messages.module.scss';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
import { connect } from 'react-redux';
import { addMessage, changeNewMessageValue } from '../../store/actions/dialogs';

const Messages = ({
  messages,
  newMessageValue,
  addNewMessageHandler,
  changeNewMessageValueHandler,
}) => {
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
      <NewMessage
        newMessageValue={newMessageValue}
        addNewMessageHandler={addNewMessageHandler}
        changeNewMessageValueHandler={changeNewMessageValueHandler}
      />
    </div>
  );
};

// TODO: Перенести изменение поля ввода в локальный стейт
const mapStateToProps = (state) => ({
  messages: state.dialogs.messages,
  newMessageValue: state.dialogs.newMessageValue,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMessageHandler: () => {
    dispatch(addMessage());
  },

  changeNewMessageValueHandler: (value) => {
    dispatch(changeNewMessageValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
