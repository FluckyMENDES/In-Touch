import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { profileListeners } from './store/state';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} profileListeners={profileListeners} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
