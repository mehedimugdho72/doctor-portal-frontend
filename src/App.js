import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
