import React, { useState } from 'react';
import Dialogs from '../components/Dialogs/Dialogs';
import Messages from '../components/Messages/Messages';

const DialogsPage = () => {
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

  return (
    <>
      <Dialogs dialogs={dialogs} />
      <Messages />
    </>
  );
};

export default DialogsPage;
