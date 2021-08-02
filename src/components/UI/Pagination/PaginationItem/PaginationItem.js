import React from 'react';
import classes from './PaginationItem.module.scss';
import Button from '../../Button/Button';

const PaginationItem = ({ number, isActive, onPaginationItemClick }) => {
  const btnKind = isActive ? 'primary' : 'secondary';

  return (
    <li className={classes.PaginationItem}>
      <Button kind={btnKind} onClick={onPaginationItemClick.bind(this, number)}>
        {number}
      </Button>
    </li>
  );
};

export default PaginationItem;
