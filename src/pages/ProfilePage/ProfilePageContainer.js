import axios from './../../axios/axios';
import React, { useEffect } from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { setUserProfile } from '../../store/actions';
import { useParams } from 'react-router-dom';

const ProfilePageContainer = (props) => {
  console.log(props);
  let { id } = useParams();
  if (!id) {
    id = props.userId || 18871;
  }
  useEffect(() => {
    axios.get(`/profile/${id}`).then((response) => {
      props.setUserProfile(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProfilePage {...props} profile={props.currentUserProfile} />;
};

const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.profilePage.currentUserProfile,
    userId: state.auth.id,
  };
};

export default connect(mapStateToProps, { setUserProfile })(ProfilePageContainer);
