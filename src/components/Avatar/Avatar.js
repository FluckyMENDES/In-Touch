import React from 'react';
import classes from './Avatar.module.scss';
import blankUserAvatar from './../../assets/img/user.svg';

const Avatar = ({
  img = blankUserAvatar,
  name,
  size = 'auto',
  type = 'circle',
  withUsername = false,
}) => {
  const cls = [classes.Avatar];
  type === 'profile' && cls.push(classes.profile);

  return (
    <div className={cls.join(' ')}>
      <img src={img} alt={name} style={{ width: `${size}px`, height: `${size}px` }} />
      {withUsername && <strong>{name}</strong>}
    </div>
  );
};

export default Avatar;
