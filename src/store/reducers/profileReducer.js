import { ADD_POST, CHANGE_NEW_POST_VALUE } from '../actionTypes';
import profileAvatar from '../../assets/img/mock-profile-avatar.jpg';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        author: 'Oleg Kireev',
        authorAvatarUrl: profileAvatar,
        date: new Date().toLocaleString(),
        text: state.newPostValue,
      };

      state.posts.push(newPost);
      state.newPostValue = '';
      return state;

    case CHANGE_NEW_POST_VALUE:
      state.newPostValue = action.payload;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
