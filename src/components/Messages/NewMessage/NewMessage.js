import React, { useRef } from 'react';
import classes from './NewMessage.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';

const NewMessage = () => {
  const textAreaEl = useRef();
  const createMessageHandler = (e) => {
    e.preventDefault();
    console.log(textAreaEl.current.value);
  };

  return (
    <form className={classes.NewMessage} onSubmit={createMessageHandler}>
      <Textarea elRef={textAreaEl} />
      <Button kind="primary" type="submit">
        Send
      </Button>
    </form>
  );
};

export default NewMessage;
