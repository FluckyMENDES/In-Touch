import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ login, isAuth, error }) => {
  if (isAuth) return <Redirect to="/" />;

  return (
    <div className={classes.Login}>
      <h2>Login</h2>
      <LoginForm loginHandle={login} error={error} />
    </div>
  );
};

export default Login;
