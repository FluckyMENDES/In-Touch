import React from 'react';
import Login from './../components/Login/Login';
import { connect } from 'react-redux';
import { login } from './../store/thunks/auth';

const LoginContainer = (props) => <Login {...props} />;

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  error: state.auth.loginFormError,
});

export default connect(mapStateToProps, { login })(LoginContainer);
