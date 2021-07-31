import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';

const DialogsPage = ({
  state,
  addMessageHandler,
  changeNewMessageValueHandler,
  dialogs,
  messages,
}) => {
  return (
    <div className={classes.DialogsPage}>
      <Dialogs dialogs={dialogs} />
      <Messages
        state={state}
        addMessageHandler={addMessageHandler}
        changeNewMessageValueHandler={changeNewMessageValueHandler}
        messages={messages}
      />
    </div>
  );
};

export default DialogsPage;
