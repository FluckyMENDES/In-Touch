import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ProfilePage from './containers/ProfilePageContainer';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import Login from './containers/LoginContainer';
import Welcome from './components/Welcome/Welcome';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialize } from './store/thunks/app';
import Preloader from './components/UI/Preloader/Preloader';

function App({ isUserAuth, isInitialized, initialize }) {
  useEffect(() => {
    initialize(true);
  }, [initialize]);

  if (!isInitialized) return <Preloader center />;

  return (
    <div className="App container">
      <Layout>
        <Switch>
          {isUserAuth ? (
            <Route path="/" exact component={ProfilePage} />
          ) : (
            <Route path="/" exact component={Welcome} />
          )}
          <Route path="/settings" component={SettingsPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/dialogs/:id?" exact component={DialogsPage} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={PeoplePage} />
          <Route path="/profile/:id?" component={ProfilePage} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  // debugger;
  return {
    isUserAuth: state.auth.isAuth,
    isInitialized: state.app.isInitialized,
  };
};

export default connect(mapStateToProps, { initialize })(App);
