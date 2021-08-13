import React from 'react';
import classes from './NewsPage.module.scss';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const NewsPage = () => {
  return (
    <div className={classes.NewsPage}>
      <h2>News</h2>
    </div>
  );
};

export default withAuthRedirect(NewsPage);
