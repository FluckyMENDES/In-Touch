import React from 'react';
import classes from './PeopleList.module.scss';
import PeopleItem from './PeopleItem/PeopleItem';
import Pagination from '../UI/Pagination/Pagination';

const PeopleList = ({
  users,
  currentPage,
  pageSize,
  totalUsersCount,
  changeCurrentPage,
  follow,
  unfollow,
  followingInProgress,
}) => {
  const renderItems = (items) =>
    items.map(
      ({
        name,
        status,
        location = { country: 'Russia', city: 'Moscow' },
        followed,
        photos,
        id,
      }) => {
        const { country, city } = location;
        const img = photos.small;
        return (
          <PeopleItem
            key={id}
            id={id}
            name={name}
            country={country}
            city={city}
            status={status}
            img={img}
            followed={followed}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
        );
      }
    );

  return (
    <div className={classes.PeopleList}>
      <ul className={classes.list}>{renderItems(users)}</ul>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        total={totalUsersCount}
        onPaginationItemClick={changeCurrentPage}
      />
    </div>
  );
};

export default PeopleList;
