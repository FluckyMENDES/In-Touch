import React, { useState, useRef } from 'react';
import classes from './UserMenu.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const UserMenu = ({ login, logoutHandle }) => {
  const [isExpanded, toggleIsExpanded] = useState(false);

  const cls = [classes.UserMenu];
  if (isExpanded) cls.push(classes.isExpanded);

  const onEscKeydown = (e) => {
    if (e.key === 'Escape') {
      toggleIsExpanded(false);
    }
  };

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => toggleIsExpanded(false));

  return (
    <div className={cls.join(' ')} onKeyDown={onEscKeydown} ref={wrapperRef}>
      <button onClick={toggleIsExpanded.bind(null, !isExpanded)}>
        {login}
        <IoIosArrowDown fill="#e7e8ec" />
      </button>
      {isExpanded && (
        <ul className={classes.body}>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/" onClick={logoutHandle}>
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
