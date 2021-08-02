import React from 'react';
import classes from './PeoplePage.module.scss';
import PeopleList from '../../components/PeopleList/PeopleList';

const DialogsPage = () => {
  return (
    <div className={classes.PeoplePage}>
      <h1>People</h1>
      <PeopleList />
    </div>
  );
};

export default DialogsPage;
