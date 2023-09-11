import React from 'react';
import './Navbar.css';

const Navbar = ({ status }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {/* <li className="navbar-item">Community</li> */}
                <li className="navbar-item">{status}</li>
            </ul>
        </nav>
    );
};

export default Navbar;
