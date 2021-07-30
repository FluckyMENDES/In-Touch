import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = ({ placeholder, className, value, elRef }) => {
  const cls = [classes.Textarea];
  className && cls.push(className);

  return (
    <textarea
      className={cls.join(' ')}
      placeholder={placeholder}
      defaultValue={value}
      ref={elRef}></textarea>
  );
};

export default Textarea;
