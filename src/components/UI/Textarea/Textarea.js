import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = ({ placeholder, className, value }) => {
  const cls = [classes.Textarea];
  className && cls.push(className);

  return (
    <textarea className={cls.join(' ')} placeholder={placeholder} defaultValue={value}></textarea>
  );
};

export default Textarea;
