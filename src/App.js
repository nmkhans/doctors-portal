import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
    </div>
  );
}

export default App;