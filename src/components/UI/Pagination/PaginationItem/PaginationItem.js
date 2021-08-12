import React from 'react';
import classes from './PaginationItem.module.scss';
import Button from '../../Button/Button';

const PaginationItem = ({ value, isActive, onPaginationItemClick }) => {
  const btnKind = isActive ? 'primary' : 'secondary';

  return (
    <li className={classes.PaginationItem}>
      {value === 'ellipsis' ? (
        <span>...</span>
      ) : (
        <Button kind={btnKind} onClick={onPaginationItemClick.bind(this, value)}>
          {value}
        </Button>
      )}
    </li>
  );
};

export default PaginationItem;
