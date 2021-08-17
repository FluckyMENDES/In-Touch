import React from 'react';
import Login from './../components/Login/Login';
import { connect } from 'react-redux';
import { login } from './../store/thunks/auth';
import { isAuthSelector, loginFormErrorSelector } from '../store/selectors/auth';

const LoginContainer = (props) => <Login {...props} />;

const mapStateToProps = (state) => ({
  isAuth: isAuthSelector(state),
  error: loginFormErrorSelector(state),
});

export default connect(mapStateToProps, { login })(LoginContainer);
