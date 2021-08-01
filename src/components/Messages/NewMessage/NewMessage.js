import React, { useRef } from 'react';
import classes from './NewMessage.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const NewMessage = ({ newMessageValue, addNewMessageHandler, changeNewMessageValueHandler }) => {
  const newMessageTextAreaEl = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewMessageHandler();
  };

  const onTextAreaChange = () => {
    const value = newMessageTextAreaEl.current.value;
    changeNewMessageValueHandler(value);
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
