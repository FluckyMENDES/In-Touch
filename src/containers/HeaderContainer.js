import React from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { logout } from './../store/thunks/auth';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
