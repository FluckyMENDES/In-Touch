import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { Switch, Route } from 'react-router-dom';
import { StoreContext } from './context/StoreContext';

function App({ store }) {
  return (
    <div className="App container">
      <StoreContext.Provider value={store}>
        <Layout>
          <Switch>
            <Route path="/settings" component={SettingsPage} />
            <Route path="/music" component={MusicPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/dialogs/:id" component={DialogsPage} />
            <Route path="/dialogs" component={DialogsPage} />
            <Route path="/" exact component={ProfilePage} />
          </Switch>
        </Layout>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
