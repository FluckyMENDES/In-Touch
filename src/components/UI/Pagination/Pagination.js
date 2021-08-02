import React from 'react';
import classes from './Pagination.module.scss';
import PaginationItem from './PaginationItem/PaginationItem';

const Pagination = ({ totalUsersCount, pageSize, currentPage, onPaginationItemClick }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const paginationItems = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationItems.push(i);
  }

  const renderItems = (items) =>
    items.map((item, index) => {
      return (
        <PaginationItem
          key={`${item}-${index}`}
          number={item}
          isActive={currentPage === item}
          onPaginationItemClick={onPaginationItemClick}
        />
      );
    });
  return <ul className={classes.Pagination}>{renderItems(paginationItems)}</ul>;
};

export default Pagination;
