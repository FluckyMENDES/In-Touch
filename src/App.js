import './App.css';
import Layout from './hoc/Layout/Layout';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App container">
      <Layout>
        <ProfilePage />
      </Layout>
    </div>
  );
}

export default App;
