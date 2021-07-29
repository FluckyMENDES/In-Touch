import React, { useState } from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';

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
    messages: [
      {
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        authorId: 1,
        date: '27.07.2021 22:01:05',
        isRead: true,
      },
      {
        text: 'Maiores necessitatibus quisquam.',
        authorId: 2,
        date: '27.07.2021 22:03:11',
        isRead: true,
      },
      {
        text: 'Nulla qui sapiente.',
        authorId: 2,
        date: '27.07.2021 22:04:23',
        isRead: true,
      },
      {
        text: 'Nillo tenetur blanditiis fugiat, laudantium nam minima expedita!',
        authorId: 1,
        date: '28.07.2021 09:19:46',
        isRead: true,
      },
      {
        text: 'Laboriosam possimus eaque maiores, in et nisi excepturi sint molestiae exercitationem mollitia.',
        authorId: 2,
        date: '27.07.2021 22:04:47',
        isRead: false,
      },
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const [dialogs, refreshDialogs] = useState(initialState.dialogs);
  // eslint-disable-next-line no-unused-vars
  const [messages, refreshMessages] = useState(initialState.messages);

  return (
    <div className={classes.DialogsPage}>
      <Dialogs dialogs={dialogs} />
      <Messages messages={messages} />
    </div>
  );
};

export default DialogsPage;
