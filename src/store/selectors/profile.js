export const profileSelector = (state) => {
  return state.profile.profile;
};

export const statusSelector = (state) => {
  return state.profile.status;
};

export const isLoadingSelector = (state) => {
  return state.profile.isLoading;
};
