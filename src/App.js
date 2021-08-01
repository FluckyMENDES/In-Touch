import './App.css';
import Layout from './hoc/Layout/Layout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { Switch, Route } from 'react-router-dom';

function App({ state, dispatch }) {
  return (
    <div className="App container">
      <Layout>
        <Switch>
          <Route path="/settings" component={SettingsPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/news" component={NewsPage} />
          <Route
            path="/dialogs/:id"
            render={() => (
              <DialogsPage
                state={state.pages.dialogs}
                messages={state.messages}
                dialogs={state.dialogs}
                dispatch={dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsPage
                state={state.pages.dialogs}
                messages={state.messages}
                dialogs={state.dialogs}
                dispatch={dispatch}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => (
              <ProfilePage
                state={state.pages.profile}
                posts={state.posts}
                user={state.user}
                dispatch={dispatch}
              />
            )}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
