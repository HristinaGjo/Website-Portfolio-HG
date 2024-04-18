import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route directly

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="appCtn">
      <Navbar />
      <div className="contentCtn">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
