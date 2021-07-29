import React from 'react';
import classes from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';

const Dialogs = ({ dialogs }) => {
  const renderItems = (items) =>
    items.map(({ userId, username, userAvatar }, index) => (
      <Dialog key={userId} userId={userId} username={username} userAvatar={userAvatar} />
    ));

  return (
    <>
      <ul className={classes.Dialogs}>{renderItems(dialogs)}</ul>
    </>
  );
};

export default Dialogs;
