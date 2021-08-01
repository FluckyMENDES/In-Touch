import React from 'react';
import classes from './ProfileInfo.module.scss';
import Avatar from '../UI/Avatar/Avatar';
import ProfileDesc from './ProfileDesc/ProfileDesc';
import { connect } from 'react-redux';

const ProfileInfo = ({ user }) => {
  const username = `${user.name.firstName} ${user.name.lastName}`;

  return (
    <div className={classes.ProfileInfo}>
      <Avatar type="profile" img={user.avatar.url} name={username} />
      <ProfileDesc user={user} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.global.user,
});

export default connect(mapStateToProps)(ProfileInfo);
