import { ADD_MESSAGE, CHANGE_NEW_MESSAGE_VALUE } from '../actionTypes';

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeNewMessageValue = (value) => ({
  type: CHANGE_NEW_MESSAGE_VALUE,
  payload: value,
});
