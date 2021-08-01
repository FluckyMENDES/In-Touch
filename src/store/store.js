import profileAvatar from '../assets/img/mock-profile-avatar.jpg';

let store = {
  _state: {
    user: {
      id: 1,
      name: {
        firstName: 'Oleg',
        lastName: 'Kireev',
      },
      avatar: {
        url: profileAvatar,
      },
      props: {
        dateOfBirth: '30.10.1989',
        city: 'Moscow',
        education: 'MIU',
        website: 'http://olegkireev.ru',
      },
    },
    posts: [
      {
        id: 1,
        author: 'Username1',
        authorAvatarUrl: 'https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1.jpg',
        date: '01.01.2000',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores necessitatibus quisquam sunt nostrum culpa dicta corrupti vitae voluptates, quis eligendi recusandae odio architecto! Praesentium voluptatibus tempora est mollitia, quae dolorem.',
      },
      {
        id: 2,
        author: 'Username2',
        authorAvatarUrl: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
        date: '02.02.2001',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque minima dolorum pariatur corrupti recusandae in repellendus explicabo? Nulla qui sapiente consequuntur, rem impedit, illo tenetur blanditiis fugiat, laudantium nam minima expedita! Unde hic repudiandae, atque deleniti sed sunt nemo quo molestiae amet deserunt nobis quam. Temporibus facere soluta voluptates pariatur.',
      },
      {
        id: 3,
        author: 'Username3',
        authorAvatarUrl: 'https://s1.1zoom.ru/big7/888/Eyes_Owls_Bubo_502568.jpg',
        date: '03.03.2002',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus eaque maiores, in et nisi excepturi sint molestiae exercitationem mollitia.',
      },
    ],
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
    pages: {
      profile: {
        newPostValue: '',
      },
      dialogs: {
        newMessageValue: '',
      },
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('_callSubscriber function isn`t defined');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch({ type, payload }) {
    switch (type) {
      case 'ADD_POST':
        this._addPostHandler();
        break;
      case 'CHANGE_NEW_POST_VALUE':
        this._changeNewPostValueHandler(payload);
        break;
      case 'ADD_MESSAGE':
        this._addMessageHandler();
        break;
      case 'CHANGE_NEW_MESSAGE_VALUE':
        this._changeNewMessageValueHandler(payload);
        break;
      default:
        return true;
    }
  },
  _addPostHandler() {
    const newPost = {
      id: this._state.posts.length + 1,
      author: 'Oleg Kireev',
      authorAvatarUrl: profileAvatar,
      date: new Date().toLocaleString(),
      text: this._state.pages.profile.newPostValue,
    };

    this._state.posts.push(newPost);
    this._state.pages.profile.newPostValue = '';
    this._callSubscriber(this._state);
  },
  _changeNewPostValueHandler(newValue) {
    this._state.pages.profile.newPostValue = newValue;
    this._callSubscriber(this._state);
  },
  _addMessageHandler() {
    const newMessage = {
      id: this._state.messages.length + 1,
      text: this._state.pages.dialogs.newMessageValue,
      authorId: 1,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    this._state.messages.push(newMessage);
    this._state.pages.dialogs.newMessageValue = '';
    this._callSubscriber(this._state);
  },
  _changeNewMessageValueHandler(newValue) {
    this._state.pages.dialogs.newMessageValue = newValue;
    this._callSubscriber(this._state);
  },
};

export default store;
