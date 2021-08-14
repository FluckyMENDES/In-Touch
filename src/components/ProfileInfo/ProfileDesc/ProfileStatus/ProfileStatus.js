import React, { useState, useEffect } from 'react';
import classes from './ProfileStatus.module.scss';

const ProfileStatus = ({ text, updateUserStatus, isCurrentUser }) => {
  const [isEditMode, toggleEditMode] = useState(false);
  const [status, setLocalStatus] = useState(text);

  useEffect(() => {
    setLocalStatus(text);
  }, [text]);

  const onStatusChangeAccept = (value) => {
    toggleEditMode(false);
    updateUserStatus(value);
  };

  const onStatusChangeAbort = () => {
    toggleEditMode(false);
    setLocalStatus(text);
  };

  const onStatusChange = (e) => {
    const newValue = e.currentTarget.value;
    setLocalStatus(newValue);
  };

  const onStatusEnterKeyDown = (e) => {
    if (e.key === 'Enter') onStatusChangeAccept(status);
    if (e.key === 'Escape') onStatusChangeAbort();
  };

  return (
    <div className={classes.ProfileStatus}>
      {isEditMode && isCurrentUser ? (
        <input
          onKeyDown={onStatusEnterKeyDown}
          onChange={onStatusChange}
          onBlur={onStatusChangeAbort}
          value={status}
          autoFocus
        />
      ) : (
        <p onDoubleClick={toggleEditMode.bind(null, true)}>{status || 'No status'}</p>
      )}
    </div>
  );
};

export default ProfileStatus;
