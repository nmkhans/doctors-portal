import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import LinkTo from './../LinkTo/LinkTo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    const signOutUser = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const MenuItems = () => {
        return (
            <>
                <li><LinkTo to="/">Home</LinkTo></li>
                <li><LinkTo to="/appointment">Appointment</LinkTo></li>
                <li><LinkTo to="/review">Review</LinkTo></li>
                <li><LinkTo to="/contact-us">Contact</LinkTo></li>
                <li>{user && <LinkTo to="/dashboard">Dashboard</LinkTo>}</li>
                <li>{user ? <button onClick={signOutUser} className="btn btn-ghost mt-3">Sign Out</button> : <LinkTo to="/login">Login</LinkTo>}</li>
            </>
        )
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <MenuItems />
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <MenuItems />
                </ul>
            </div>
            {
                (location.pathname === '/dashboard') && (
                    <div className="navbar-end lg:hidden">
                        <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                )
            }
        </div>
    );
};

export default Header;