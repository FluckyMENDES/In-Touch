import React from 'react';
import classes from './NewPost.module.scss';
import Textarea from '../../UI/Textarea/Textarea';
import Button from './../../UI/Button/Button';

const NewPost = () => {
  return (
    <form className={classes.NewPost}>
      <Textarea placeholder="Write your news..." />
      <Button type="submit" kind="primary">
        Send
      </Button>
    </form>
  );
};

export default NewPost;
