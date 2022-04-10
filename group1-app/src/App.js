<<<<<<< HEAD
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
=======
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
>>>>>>> 814efecbda97ee40f5212781f793a0c98bc52951
  );
}

export default App;
