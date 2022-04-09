import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './components/pages/Home';
import {Map} from './components/pages/Map';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Map' element={<Map/>} />
       </Routes>
      </Router>   
    </>
  );
}

export default App;
