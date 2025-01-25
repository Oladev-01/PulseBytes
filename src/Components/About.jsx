import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import { Nav } from './nav';
import { Footer } from './footer';

export const About = () => {
    return (
        <div className="about">
            <Nav />
            <div></div>
            <Footer />
        </div>
    )
}
