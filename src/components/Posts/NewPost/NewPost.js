import React, { createRef } from 'react';
import classes from './NewPost.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from './../../UI/Button/Button';

const NewPost = () => {
  const textAreaEl = createRef();

  const addPostHandler = (e) => {
    e.preventDefault();
    console.log(textAreaEl.current.value);
  };

  return (
    <form className={classes.NewPost} onSubmit={addPostHandler}>
      <Textarea placeholder="Write your news..." elRef={textAreaEl} />
      <Button type="submit" kind="primary">
        Send
      </Button>
    </form>
  );
};

export default NewPost;
