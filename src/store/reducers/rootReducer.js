import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  global: globalReducer,
});
