import React from 'react';
import classes from './ProfileRows.module.scss';

const ProfileRows = ({ user }) => {
  const { dateOfBirth, city, education, website } = user.props;

  return (
    <div className={classes.ProfileRows}>
      <div>
        <span>Birthday:</span>
        <span>{dateOfBirth}</span>
      </div>
      <div>
        <span>City:</span>
        <span>{city}</span>
      </div>
      <div>
        <span>Education:</span>
        <span>{education}</span>
      </div>
      <div>
        <span>Website:</span>
        <span>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProfileRows;
