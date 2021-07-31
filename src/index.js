import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPostHandler={store.addPostHandler.bind(store)}
          changeNewPostValueHandler={store.changeNewPostValueHandler.bind(store)}
          addMessageHandler={store.addMessageHandler.bind(store)}
          changeNewMessageValueHandler={store.changeNewMessageValueHandler.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
