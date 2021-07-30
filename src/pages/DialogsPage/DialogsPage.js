import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';

const DialogsPage = ({ state, dialogsListeners, dialogs, messages }) => {
  return (
    <div className={classes.DialogsPage}>
      <Dialogs dialogs={dialogs} />
      <Messages state={state} dialogsListeners={dialogsListeners} messages={messages} />
    </div>
  );
};

export default DialogsPage;
