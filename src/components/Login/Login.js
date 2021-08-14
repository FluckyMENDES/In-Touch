import React from 'react';
import classes from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  return (
    <div className={classes.Login}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
