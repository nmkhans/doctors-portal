import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './../Login/Login';
import Home from './../Home/Home';
import Appointment from './../Appointment/Appointment';
import Register from './../Register/Register';
import RequireAuth from '../../components/RequireAuth/RequireAuth';


const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={
                <RequireAuth>
                    <Appointment />
                </RequireAuth>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default ApplicationRoutes;