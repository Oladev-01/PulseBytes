import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';


export const Nav = ({ isContact }) => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleMenu = () => {
        setIsHidden(!isHidden);
        console.log("Menu toggled:", isHidden);
    };

    return (
        <nav className={isContact ? 'contact-nav' : 'project-nav'}>
            <h2 className="pulse-bytes"><Link to="/" >
                PulseBytes.
            </Link></h2>
            <ul id="navlink" className={isHidden ? 'hidden' : ''}>
                <li id='navlink-home'><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                {isHidden && (<li id='hidden-contact' ><Link to="/contact">Contact</Link></li>)}
            </ul>
            <Link to="/contact" id="contact" >Contact</Link>
            <div className="menu" id="Menu" onClick={toggleMenu}>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
                <div className="menu-item"></div>
            </div>
        </nav>
    )
}