import React from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { logout } from './../store/thunks/auth';
import { isAuthSelector, loginSelector } from '../store/selectors/auth';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => ({
  isAuth: isAuthSelector(state),
  login: loginSelector(state),
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
