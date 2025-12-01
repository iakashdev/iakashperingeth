// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './home';
import Path from './path';
import Project from './projects';
import Connect from './connect';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/path" element={<Path />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/connect" element={<Connect />} />

       

      </Routes>
    </Router>
  );
}

export default App;