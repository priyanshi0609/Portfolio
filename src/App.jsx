import React from 'react';
import Home from './components/Home';
import About from './components/About';
import EducationPage from './components/Education';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </Router>
  );
}

export default App;