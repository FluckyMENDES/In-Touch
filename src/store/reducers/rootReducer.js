import { combineReducers } from 'redux';
import appReducer from './appReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  app: appReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
