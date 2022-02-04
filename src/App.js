import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
  </div>
  );
}

export default App;
