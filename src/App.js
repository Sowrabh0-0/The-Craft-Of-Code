import React from 'react';
import './App.css'; 
import Home from './components/Home';
import Schedule from './components/Schedule';
import Socials from './components/Socail';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/socials' element={<Socials/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
