import React from 'react';
import classes from './SettingsPage.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const SettingsPage = () => {
  return (
    <div className={classes.SettingsPage}>
      <h2>Settings</h2>
    </div>
  );
};

export default withAuthRedirect(SettingsPage);
