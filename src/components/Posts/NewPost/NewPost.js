import React, { createRef } from 'react';
import classes from './NewPost.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from './../../UI/Button/Button';

const NewPost = ({ state, addPostHandler, changeNewPostValueHandler }) => {
  const newPostValue = state.newPostValue;
  const newPostTextAreaEl = createRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    addPostHandler();
  };

  const onTextAreaChange = () => {
    changeNewPostValueHandler(newPostTextAreaEl.current.value);
  };

  return (
    <form className={classes.NewPost} onSubmit={onFormSubmit}>
      <Textarea
        value={newPostValue}
        placeholder="Write your news..."
        elRef={newPostTextAreaEl}
        onChange={onTextAreaChange}
      />
      <Button type="submit" kind="primary">
        Send
      </Button>
    </form>
  );
};

export default NewPost;
