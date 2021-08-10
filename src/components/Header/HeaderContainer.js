import axios from './../../axios/axios';
import React, { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../store/actions';

const HeaderContainer = (props) => {
  useEffect(() => {
    axios.get(`/auth/me`).then((response) => {
      const { id, email, login } = response.data.data;

      if (response.data.resultCode === 0) {
        props.setAuthUserData(id, email, login);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
