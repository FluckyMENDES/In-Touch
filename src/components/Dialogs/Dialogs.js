import React from 'react';
import classes from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import { connect } from 'react-redux';

const Dialogs = ({ dialogs }) => {
  const renderItems = (items) =>
    items.map(({ userId, username, userAvatar }) => (
      <Dialog key={userId} userId={userId} username={username} userAvatar={userAvatar} />
    ));

  return (
    <>
      <ul className={classes.Dialogs}>{renderItems(dialogs)}</ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
});

export default connect(mapStateToProps)(Dialogs);
