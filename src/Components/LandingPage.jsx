import React, { useState } from 'react';
import '../styles/landingpage.css';
import { Nav } from './nav';
import { Footer } from './footer';
import FirstHalf from './first-half';
import SecondHalf from './second-half';

function LandingPage() {

    return (
        <div className='home'>
            <Nav /> 
            <div className='landing-body'>
                <FirstHalf />
                <SecondHalf />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;