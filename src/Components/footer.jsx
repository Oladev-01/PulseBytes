import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
        <div className='footers-hold'>
            <div className="footers">
                <div className="footer-service">
                    <span>Services</span>
                    <ul>
                        <li><Link to="/e-commerce">E-commerce</Link></li>
                        <li><Link to="">UI/UX Design</Link></li>
                        <li><Link to="">Digital Marketing</Link></li>
                        <li><Link to="">App Development</Link></li>
                        <li><Link to="">Virtual Assistant</Link></li>
                        <li><Link to="">Website Design</Link></li>
                    </ul>
                </div>
                <div className="footer-media">
                    <span>Social Media</span>
                    <ul>
                        <li>Instagram</li>
                        <li>FaceBook</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <span>Contact Us</span>
                    <ul>
                        <li>email</li>
                        <li>phone no</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <ul className='legal'>
                    <li><Link to="">Legal</Link></li>
                    <li><Link to="">Privacy</Link></li>
                    <li><Link to="">Terms</Link></li>
                </ul>
                <p>&copy; {currentYear} PulseBytes Team.</p>
            </div>
        </div>
    </footer>
    )
}