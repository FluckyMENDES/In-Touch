import React, { createRef } from 'react';
import classes from './NewPost.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from './../../UI/Button/Button';

const NewPost = ({ addPostHandler }) => {
  const textAreaEl = createRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    addPostHandler(textAreaEl.current.value);
    textAreaEl.current.value = null;
  };

  return (
    <form className={classes.NewPost} onSubmit={onFormSubmit}>
      <Textarea placeholder="Write your news..." elRef={textAreaEl} />
      <Button type="submit" kind="primary">
        Send
      </Button>
    </form>
  );
};

export default NewPost;
