import './App.css';
import Layout from './hoc/Layout/Layout';
import DialogsPage from './pages/DialogsPage';
import ProfilePage from './pages/ProfilePage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Layout>
        <Switch>
          <Route path="/dialogs" component={DialogsPage} />
          <Route path="/" exact component={ProfilePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
