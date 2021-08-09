import React from 'react';
import classes from './ProfileRows.module.scss';

const ProfileRows = ({ profile }) => {
  const renderContacts = (contacts) =>
    Object.keys(contacts).map((key, index) => {
      const link = contacts[key];
      if (!link) return null;
      return (
        <div key={`${key}-${index}`}>
          <span>{key}:</span>
          <span>
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </span>
        </div>
      );
    });

  return (
    <div className={classes.ProfileRows}>
      <p>{profile.aboutMe}</p>
      {renderContacts(profile.contacts)}
    </div>
  );
};

export default ProfileRows;
