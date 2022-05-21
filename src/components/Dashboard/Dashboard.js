import React from 'react';
import { Outlet } from 'react-router-dom';
import LinkTo from './../LinkTo/LinkTo';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F1F5F9] p-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><LinkTo to="/dashboard">My Appointents</LinkTo></li>
                        <li><LinkTo to="/dashboard/account">My Account</LinkTo></li>
                        <li><LinkTo to="/dashboard/all-users">All Users</LinkTo></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;