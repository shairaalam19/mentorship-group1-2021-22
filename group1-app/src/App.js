import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './components/pages/Home';
import {Map} from './components/pages/Map';
import {Destination} from './components/pages/Destination';
import {Signup} from './components/pages/Signup';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Map' element={<Map/>} />
          <Route path='/Destination' element={<Destination/>} />
          <Route path='/Sign-up' element={<Signup/>} />
       </Routes>
       <Footer/>
      </Router>   
    </>
  );
}

export default App;
