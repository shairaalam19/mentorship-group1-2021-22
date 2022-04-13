import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './components/pages/Home';
import {Map} from './components/pages/Map';
import {Destination} from './components/pages/Destination';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Map' element={<Map/>} />
          <Route path='/Destination' element={<Destination/>} />
       </Routes>
      </Router>   
    </>
  );
}

export default App;
