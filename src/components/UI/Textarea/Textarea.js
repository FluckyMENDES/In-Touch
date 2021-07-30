import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = ({ placeholder, className, value, elRef, onChange }) => {
  const cls = [classes.Textarea];
  className && cls.push(className);

  return (
    <textarea
      className={cls.join(' ')}
      placeholder={placeholder}
      value={value}
      ref={elRef}
      onChange={onChange}></textarea>
  );
};

export default Textarea;
