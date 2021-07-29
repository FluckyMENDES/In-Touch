import React, { useState } from 'react';
import classes from './DialogList.module.scss';
import DialogItem from './DialogItem/DialogItem';

const DialogList = () => {
  const initialState = {
    dialogs: [
      {
        userId: 1,
        username: 'Testuser1',
        userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
      },
      {
        userId: 2,
        username: 'Testuser2',
        userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
      },
      {
        userId: 3,
        username: 'Testuser3',
        userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
      },
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const [dialogs, refreshDialogs] = useState(initialState.dialogs);

  const renderItems = (items) =>
    items.map(({ userId, username, userAvatar }, index) => (
      <DialogItem key={userId} userId={userId} username={username} userAvatar={userAvatar} />
    ));

  return (
    <div className={classes.DialogList}>
      <ul>{renderItems(dialogs)}</ul>
    </div>
  );
};

export default DialogList;
