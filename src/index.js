import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const state = {
  posts: [
    {
      author: 'Username1',
      authorAvatarUrl: 'https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1.jpg',
      date: '01.01.2000',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores necessitatibus quisquam sunt nostrum culpa dicta corrupti vitae voluptates, quis eligendi recusandae odio architecto! Praesentium voluptatibus tempora est mollitia, quae dolorem.',
    },
    {
      author: 'Username2',
      authorAvatarUrl: 'http://kroliki-prosto.ru/wp-content/uploads/2020/09/sa.jpg',
      date: '02.02.2001',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque minima dolorum pariatur corrupti recusandae in repellendus explicabo? Nulla qui sapiente consequuntur, rem impedit, illo tenetur blanditiis fugiat, laudantium nam minima expedita! Unde hic repudiandae, atque deleniti sed sunt nemo quo molestiae amet deserunt nobis quam. Temporibus facere soluta voluptates pariatur.',
    },
    {
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
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
