import React, { useState } from 'react';
import classes from './ProfileStatus.module.scss';

const ProfileStatus = ({ text }) => {
  const [isEditMode, toggleEditMode] = useState(false);

  return (
    <div className={classes.ProfileStatus}>
      {isEditMode ? (
        <input autoFocus onBlur={toggleEditMode.bind(null, false)} value={text} />
      ) : (
        <p onDoubleClick={toggleEditMode.bind(null, true)}>{text}</p>
      )}
    </div>
  );
};

export default ProfileStatus;
