import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './../Login/Login';
import Home from './../Home/Home';
import Appointment from './../Appointment/Appointment';
import Register from './../Register/Register';
import RequireAuth from '../../components/RequireAuth/RequireAuth';
import Dashboard from './../../components/Dashboard/Dashboard';
import MyAppointments from './../../components/MyAppointments/MyAppointments';
import Account from './../../components/Account/Account';
import AllUsers from './../../components/AllUsers/AllUsers';
import AddDoctor from './../../components/AddDoctor/AddDoctor';
import ManageDoctor from './../../components/ManageDoctor/ManageDoctor';
import Payment from './../../components/Payment/Payment';


const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={
                <RequireAuth>
                    <Appointment />
                </RequireAuth>
            } />
            <Route path="/dashboard" element={
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            }>
                <Route index element={<MyAppointments />} />
                <Route path="account" element={<Account />} />
                <Route path="all-users" element={<AllUsers />} />
                <Route path="add-doctor" element={<AddDoctor />} />
                <Route path="manage-doctor" element={<ManageDoctor />} />
                <Route path="payment/:id" element={<Payment />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default ApplicationRoutes;