import React from 'react';
import { Outlet } from 'react-router-dom';
import LinkTo from './../LinkTo/LinkTo';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 ">
                    <h1>Welcome to Dashboard</h1>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><LinkTo to="/dashboard">MyAppointents</LinkTo></li>
                        <li><LinkTo to="/dashboard/account">My Account</LinkTo></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;