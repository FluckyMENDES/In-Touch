import React from 'react';
import classes from './MusicPage.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const MusicPage = () => {
  return (
    <div className={classes.MusicPage}>
      <h2>Music</h2>
    </div>
  );
};

export default withAuthRedirect(MusicPage);
