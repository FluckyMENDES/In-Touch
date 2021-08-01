import { ADD_MESSAGE, CHANGE_NEW_MESSAGE_VALUE } from '../actionTypes';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        text: state.newMessageValue,
        authorId: 1,
        date: new Date().toLocaleString(),
        isRead: false,
      };

      state.messages.push(newMessage);
      state.newMessageValue = '';

      return state;

    case CHANGE_NEW_MESSAGE_VALUE:
      state.newMessageValue = action.payload;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
