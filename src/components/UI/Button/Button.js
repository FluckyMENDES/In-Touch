import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, type = 'button', disabled = false, className, kind }) => {
  const cls = [classes.Button];
  className && cls.push(className);
  kind && cls.push(classes[kind]);

  return (
    <button className={cls.join(' ')} type={type}>
      {children}
    </button>
  );
};

export default Button;
