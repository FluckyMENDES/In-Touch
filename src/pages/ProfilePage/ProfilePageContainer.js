import React, { useEffect } from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { setUserProfile } from '../../store/actions/profile';
import { useParams } from 'react-router-dom';
import profileAPI from '../../api/profile';

const ProfilePageContainer = (props) => {
  let { id } = useParams();
  if (!id) {
    id = props.userId || 18871;
  }
  useEffect(() => {
    profileAPI.getProfile(id).then((data) => {
      props.setUserProfile(data);
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
