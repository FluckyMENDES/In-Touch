import { ADD_MESSAGE, CHANGE_NEW_MESSAGE_VALUE } from '../actionTypes';
import { cloneDeepWith } from 'lodash';

const initialState = {
  newMessageValue: '',
  dialogs: [
    {
      userId: 1,
      username: 'Testuser1',
      userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
    },
    {
      userId: 2,
      username: 'Testuser2',
      userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
    },
    {
      userId: 3,
      username: 'Testuser3',
      userAvatar: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
    },
  ],
  messages: [
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      authorId: 1,
      date: '27.07.2021 22:01:05',
      isRead: true,
    },
    {
      text: 'Maiores necessitatibus quisquam.',
      authorId: 2,
      date: '27.07.2021 22:03:11',
      isRead: true,
    },
    {
      text: 'Nulla qui sapiente.',
      authorId: 2,
      date: '27.07.2021 22:04:23',
      isRead: true,
    },
    {
      text: 'Nillo tenetur blanditiis fugiat, laudantium nam minima expedita!',
      authorId: 1,
      date: '28.07.2021 09:19:46',
      isRead: true,
    },
    {
      text: 'Laboriosam possimus eaque maiores, in et nisi excepturi sint molestiae exercitationem mollitia.',
      authorId: 2,
      date: '27.07.2021 22:04:47',
      isRead: false,
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = cloneDeepWith(state);
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        text: state.newMessageValue,
        authorId: 1,
        date: new Date().toLocaleString(),
        isRead: false,
      };

      stateCopy.messages.push(newMessage);
      stateCopy.newMessageValue = '';

      return stateCopy;

    case CHANGE_NEW_MESSAGE_VALUE:
      stateCopy.newMessageValue = action.payload;
      return stateCopy;

    default:
      return state;
  }
};

export default dialogsReducer;
