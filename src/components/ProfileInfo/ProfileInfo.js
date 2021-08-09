import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../UI/Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';
import { connect } from 'react-redux';
import Preloader from '../UI/Preloader/Preloader';

const ProfileInfo = ({ user, profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  const username = `${user.name.firstName} ${user.name.lastName}`;

  return (
    <div className={classes.ProfileInfo}>
      <Avatar type="profile" img={profile.photos.large} name={username} />
      <ProfileDesc profile={profile} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.global.user,
});

export default connect(mapStateToProps)(ProfileInfo);
