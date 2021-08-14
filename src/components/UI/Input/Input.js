import React from 'react';
import classes from './Input.module.scss';

const Input = ({
  className,
  type = 'text',
  label,
  id,
  name,
  placeholder,
  errorMessage,
  register,
  options,
}) => {
  let inputId = id;
  if (!id) {
    inputId = `${name}-${Date.now()}`;
  }

  const cls = [classes.Input, className];
  if (errorMessage) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} placeholder={placeholder} id={inputId} {...register(name, options)} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
