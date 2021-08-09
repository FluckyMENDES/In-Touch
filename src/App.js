import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import ProfilePage from './pages/ProfilePage/ProfilePageContainer';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App container">
      <Layout>
        <Switch>
          <Route path="/settings" component={SettingsPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/users" component={PeoplePage} />
          <Route path="/dialogs/:id" component={DialogsPage} />
          <Route path="/dialogs" component={DialogsPage} />
          <Route path="/profile/:id" component={ProfilePage} />
          <Route path="/" exact component={ProfilePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default connect()(App);
