import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isUserAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    isUserAuth: state.auth.isAuth,
  });
  return connect(mapStateToProps)(AuthRedirectComponent);
};
