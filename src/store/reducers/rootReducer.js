import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  global: globalReducer,
  usersPage: usersReducer,
});
