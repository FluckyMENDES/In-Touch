import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';

const DialogsPage = ({ state, dispatch, dialogs, messages }) => {
  return (
    <div className={classes.DialogsPage}>
      <Dialogs dialogs={dialogs} />
      <Messages state={state} dispatch={dispatch} messages={messages} />
    </div>
  );
};

export default DialogsPage;
