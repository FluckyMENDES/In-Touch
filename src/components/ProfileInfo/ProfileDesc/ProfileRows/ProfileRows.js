import React from 'react';
import classes from './ProfileRows.module.scss';
import { formatLink } from '../../../../utils/utils';

const ProfileRows = ({ profile }) => {
  const renderContacts = (contacts) =>
    Object.keys(contacts).map((key, index) => {
      const link = contacts[key];
      if (!link) return null;
      const formatedLink = formatLink(link);
      return (
        <div key={`${key}-${index}`}>
          <span>{key}:</span>
          <span>
            <a href={formatedLink} target="_blank" rel="noreferrer">
              {formatedLink}
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
