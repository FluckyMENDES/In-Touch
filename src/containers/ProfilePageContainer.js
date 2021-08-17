import React, { useEffect } from 'react';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../store/thunks/profile';
import { useParams } from 'react-router-dom';
import { isLoadingSelector, profileSelector, statusSelector } from '../store/selectors/profile';
import { idSelector } from '../store/selectors/auth';

const ProfilePageContainer = (props) => {
  let { id } = useParams();
  const { getUserProfile, getUserStatus } = props;

  // TODO: Refator this
  let isCurrentUser = false;
  if (props.profile) {
    if (props.profile.userId === props.userId) {
      isCurrentUser = true;
    }
  }

  // TODO: Refator this
  if (!id) {
    id = props.userId;
  }

  useEffect(() => {
    if (id) {
      getUserProfile(id);
      getUserStatus(id);
    }
  }, [getUserStatus, getUserProfile, id]);

  return <ProfilePage {...props} isCurrentUser={isCurrentUser} profile={props.profile} />;
};

const mapStateToProps = (state) => {
  return {
    profile: profileSelector(state),
    status: statusSelector(state),
    userId: idSelector(state),
    isLoading: isLoadingSelector(state),
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
})(ProfilePageContainer);
