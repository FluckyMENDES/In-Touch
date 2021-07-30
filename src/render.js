import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPostHandler } from './store/state';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPostHandler={addPostHandler} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
