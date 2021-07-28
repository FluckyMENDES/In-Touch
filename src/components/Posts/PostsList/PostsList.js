import React, { useState } from 'react';
import classes from './PostsList.module.scss';
import PostsItem from './PostsItem/PostsItem';

const PostsList = () => {
  const initialState = {
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
  };

  // eslint-disable-next-line no-unused-vars
  const [posts, refreshPosts] = useState(initialState.posts);

  const renderPosts = (items) => {
    return items.map(({ author, authorAvatarUrl, date, text }, index) => (
      <PostsItem
        key={`${author}${index}`}
        author={author}
        authorAvatarUrl={authorAvatarUrl}
        date={date}
        text={text}
      />
    ));
  };

  return <ul className={classes.PostsList}>{renderPosts(posts)}</ul>;
};

export default PostsList;
