import './App.css';
import Layout from './hoc/Layout/Layout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MusicPage from './pages/MusicPage/MusicPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { Switch, Route } from 'react-router-dom';

function App({
  state,
  addPostHandler,
  changeNewPostValueHandler,
  addMessageHandler,
  changeNewMessageValueHandler,
}) {
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
                addMessageHandler={addMessageHandler}
                changeNewMessageValueHandler={changeNewMessageValueHandler}
                dialogs={state.dialogs}
                messages={state.messages}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsPage
                state={state.pages.dialogs}
                addMessageHandler={addMessageHandler}
                changeNewMessageValueHandler={changeNewMessageValueHandler}
                dialogs={state.dialogs}
                messages={state.messages}
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
                addPostHandler={addPostHandler}
                changeNewPostValueHandler={changeNewPostValueHandler}
              />
            )}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
