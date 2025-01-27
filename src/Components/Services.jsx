import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from './nav'
import { Footer } from './footer'
import '../styles/service.css'

export const Services = () => {
    return (
        <div className="services">
            <Nav/>
            <Footer/>
        </div>
    )
}