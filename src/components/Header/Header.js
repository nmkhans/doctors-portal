import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__logo">
                        <Link to="/">Doctors Portal</Link>
                    </div>
                    <nav className="header__nav">
                        <div className="header__menu">
                            <button className="btn btn-primary text-white">click me</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;