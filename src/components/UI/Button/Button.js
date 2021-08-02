import React from 'react';
import classes from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  disabled = false,
  className,
  kind,
  wide = false,
  onClick,
}) => {
  const cls = [classes.Button];
  className && cls.push(className);
  kind && cls.push(classes[kind]);
  wide && cls.push(classes.wide);

  return (
    <button className={cls.join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
