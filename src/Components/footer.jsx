import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const handleUiNavigation = (sectionId) => {
        navigate(`/services#${sectionId}`);

        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }


    return (
        <footer>
        <div className='footers-hold'>
            <div className="footers">
                <div className="footer-service">
                    <span>Services</span>
                    <ul>
                        <li onClick={() => handleUiNavigation("ecommerce-section")}><Link to="">E-commerce</Link></li>
                        <li onClick={() => handleUiNavigation("uiux-section")}><Link to="#" >UI/UX Design</Link></li>
                        <li onClick={() => handleUiNavigation("service-digital")}><Link to="">Digital Marketing</Link></li>
                        <li onClick={() => handleUiNavigation("app-section")}><Link to="">App Development</Link></li>
                        <li onClick={() => handleUiNavigation("virtual-section")}><Link to="">Virtual Assistant</Link></li>
                        <li onClick={() => handleUiNavigation("website-section")}><Link to="">Website Design</Link></li>
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