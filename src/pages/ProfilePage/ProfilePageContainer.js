import axios from './../../axios/axios';
import React, { useEffect } from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { setUserProfile } from '../../store/actions';

const ProfilePageContainer = (props) => {
  useEffect(() => {
    axios.get(`/profile/2`).then((response) => {
      props.setUserProfile(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProfilePage {...props} profile={props.currentUserProfile} />;
};

const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.profilePage.currentUserProfile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfilePageContainer);
