import React from 'react';
import classes from './ProfileRows.module.scss';

const ProfileRows = () => {
  return (
    <div className={classes.ProfileRows}>
      <div>
        <span>Birthday:</span>
        <span>30 October 1989</span>
      </div>
      <div>
        <span>City:</span>
        <span>Moscow</span>
      </div>
      <div>
        <span>Education:</span>
        <span>MIU</span>
      </div>
      <div>
        <span>Website:</span>
        <span>http://olegkireev.ru</span>
      </div>
    </div>
  );
};

export default ProfileRows;
