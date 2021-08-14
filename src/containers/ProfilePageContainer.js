import React, { useEffect } from 'react';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../store/thunks/profile';
import { useParams } from 'react-router-dom';

const ProfilePageContainer = (props) => {
  let { id } = useParams();
  const { getUserProfile, getUserStatus } = props;

  if (!id) {
    id = props.userId;
  }

  useEffect(() => {
    if (id) {
      getUserProfile(id);
      getUserStatus(id);
    }
  }, [getUserStatus, getUserProfile, id]);

  return <ProfilePage {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isLoading: state.profilePage.isLoading,
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
})(ProfilePageContainer);
