export const isAuthSelector = (state) => {
  return state.auth.isAuth;
};

export const idSelector = (state) => {
  return state.auth.id;
};

export const loginSelector = (state) => {
  return state.auth.login;
};

export const loginFormErrorSelector = (state) => {
  return state.auth.loginFormError;
};
