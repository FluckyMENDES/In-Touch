import profileAvatar from '../../assets/img/mock-profile-avatar.jpg';

const initialState = {
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
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;
