import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { profileListeners, dialogsListeners } from './store/state';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          profileListeners={profileListeners}
          dialogsListeners={dialogsListeners}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
