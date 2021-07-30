import React, { useRef } from 'react';
import classes from './NewMessage.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const NewMessage = ({ state, dialogsListeners }) => {
  const { newMessageValue } = state;
  const { addMessageHandler, changeNewMessageValueHandler } = dialogsListeners;

  const newMessageTextAreaEl = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    addMessageHandler();
  };

  const onTextAreaChange = () => {
    changeNewMessageValueHandler(newMessageTextAreaEl.current.value);
  };

  return (
    <form className={classes.NewMessage} onSubmit={onFormSubmit}>
      <Textarea elRef={newMessageTextAreaEl} value={newMessageValue} onChange={onTextAreaChange} />
      <Button kind="primary" type="submit">
        Send
      </Button>
    </form>
  );
};

export default NewMessage;
