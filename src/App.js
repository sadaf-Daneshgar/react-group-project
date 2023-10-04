import { Routes, Route } from 'react-router-dom';
import Mission from './components/Mission';
import Rocket from './components/Rocket';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
