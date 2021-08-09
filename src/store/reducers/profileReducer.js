import { ADD_POST, CHANGE_NEW_POST_VALUE, SET_USER_PROFILE } from '../actionTypes';
import profileAvatar from '../../assets/img/mock-profile-avatar.jpg';

const initialState = {
  newPostValue: '',
  currentUserProfile: null,
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: action.payload,
      };
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        author: 'Oleg Kireev',
        authorAvatarUrl: profileAvatar,
        date: new Date().toLocaleString(),
        text: state.newPostValue,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostValue: '',
      };

    case CHANGE_NEW_POST_VALUE:
      return {
        ...state,
        newPostValue: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
