import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {browserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
