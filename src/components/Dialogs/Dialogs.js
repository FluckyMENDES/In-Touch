import React from 'react';
import classes from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';

const Dialogs = ({ dialogs }) => {
  const renderItems = (items) =>
    items.map(({ userId, username, userAvatar }, index) => (
      <Dialog key={userId} userId={userId} username={username} userAvatar={userAvatar} />
    ));

  return (
    <div className={classes.Dialogs}>
      <ul>{renderItems(dialogs)}</ul>
    </div>
  );
};

export default Dialogs;
