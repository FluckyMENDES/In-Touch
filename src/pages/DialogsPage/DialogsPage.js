import React from 'react';
import classes from './DialogsPage.module.scss';
import Dialogs from './../../components/Dialogs/Dialogs';
import Messages from '../../components/Messages/Messages';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const DialogsPage = () => {
  return (
    <div className={classes.DialogsPage}>
      <Dialogs />
      <Messages />
    </div>
  );
};

export default withAuthRedirect(DialogsPage);
