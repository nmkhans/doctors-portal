import React from 'react';
import './App.css';
import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import ApplicationRoutes from './pages/ApplicationRoutes/ApplicationRoutes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;