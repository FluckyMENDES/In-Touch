export const usersSelector = (state) => {
  return state.users.users;
};

export const pageSizeSelector = (state) => {
  return state.users.pageSize;
};

export const currentPageSelector = (state) => {
  return state.users.currentPage;
};

export const totalUsersCountSelector = (state) => {
  return state.users.totalUsersCount;
};

export const isLoadingSelector = (state) => {
  return state.users.isLoading;
};

export const followingInProgressSelector = (state) => {
  return state.users.followingInProgress;
};
