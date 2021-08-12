import React from 'react';
import classes from './Pagination.module.scss';
import PaginationItem from './PaginationItem/PaginationItem';

const Pagination = ({ total, pageSize, currentPage, onPaginationItemClick }) => {
  const pagesCount = Math.ceil(total / pageSize);
  const paginationItems = [];

  if (pagesCount <= 1) return null;

  if (currentPage !== 1) paginationItems.push(1);
  if (currentPage > 3) paginationItems.push('ellipsis');
  if (currentPage > 2) paginationItems.push(currentPage - 1);
  paginationItems.push(currentPage);
  if (currentPage + 1 < pagesCount) paginationItems.push(currentPage + 1);
  if (currentPage + 2 < pagesCount) paginationItems.push('ellipsis');
  if (currentPage < pagesCount) paginationItems.push(pagesCount);

  const renderItems = (items) => {
    return items.map((item, index) => {
      return (
        <PaginationItem
          key={`${item}-${index}`}
          value={item}
          isActive={currentPage === item}
          onPaginationItemClick={onPaginationItemClick}
        />
      );
    });
  };
  return <ul className={classes.Pagination}>{renderItems(paginationItems)}</ul>;
};

export default Pagination;
