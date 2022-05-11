import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/appointment" element={<Appointment />}/>
      </Routes>
    </div>
  );
}

export default App;