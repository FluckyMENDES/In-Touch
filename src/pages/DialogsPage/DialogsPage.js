import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';

const DialogsPage = () => {
  return (
    <div className={classes.DialogsPage}>
      <Dialogs />
      <Messages />
    </div>
  );
};

export default DialogsPage;
