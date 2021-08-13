import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ProfilePage from './containers/ProfilePageContainer';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from './store/thunks/auth';

function App({ isUserAuth, authUser }) {
  useEffect(() => {
    authUser();
  }, [authUser]);

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

const mapStateToProps = (state) => ({
  isUserAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { authUser })(App);
