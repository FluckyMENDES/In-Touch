import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';
import { addMessage, changeNewMessageValue } from '../../store/actions';

const DialogsPage = ({ store }) => {
  const { dispatch } = store;
  const { dialogs, messages, newMessageValue } = store.getState().dialogsPage;

  const addNewMessageHandler = () => {
    dispatch(addMessage());
  };

  const changeNewMessageValueHandler = (value) => {
    dispatch(changeNewMessageValue(value));
  };

  return (
    <div className={classes.DialogsPage}>
      <Dialogs dialogs={dialogs} />
      <Messages
        messages={messages}
        newMessageValue={newMessageValue}
        addNewMessageHandler={addNewMessageHandler}
        changeNewMessageValueHandler={changeNewMessageValueHandler}
      />
    </div>
  );
};

export default DialogsPage;
