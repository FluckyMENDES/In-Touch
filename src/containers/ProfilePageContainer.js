import React, { useEffect } from 'react';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import { connect } from 'react-redux';
import { setCurrentUser } from '../store/thunks/profile';
import { useParams } from 'react-router-dom';

const ProfilePageContainer = (props) => {
  let { id } = useParams();
  const { setCurrentUser } = props;
  if (!id) {
    id = props.userId;
  }

  useEffect(() => {
    if (id) {
      setCurrentUser(id);
    }
  }, [setCurrentUser, id]);

  return <ProfilePage {...props} profile={props.currentUserProfile} />;
};

const mapStateToProps = (state) => {
  return {
    currentUserProfile: state.profilePage.currentUserProfile,
    userId: state.auth.id,
    isLoading: state.profilePage.isLoading,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(ProfilePageContainer);
