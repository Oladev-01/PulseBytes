import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from './nav'
import { Footer } from './footer'
import '../styles/service.css'
import ServicesSection from "./service-section";
import ServiceDigital from "./service-digital";
import WebsiteAndDev from "./websiteanddev";
import AppDev from "./appdev";
import UiUx from "./ui-ux";
import VirtualAss from "./virtual-ass";
import Ecommerce from "./e-commerce";

export const Services = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.slice(1);
        }
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300)
    }, [location]);
    return (
        <div className="services-body">
            <Nav />
            <div className="service-body">
                <div className="service-hero-section">
                    <video autoPlay loop muted playsInline>
                        <source src="/assets/pbytes-service.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="service-hero-text">
                        <p>Innovative digital solutions tailored for your success.</p>
                        <Link to="/contact">Contact us</Link>
                    </div>
                </div>
                <ServicesSection />
                <Ecommerce />
                <ServiceDigital />
                <WebsiteAndDev />
                <AppDev />
                <UiUx />
                <VirtualAss />
                {/* <div className="service-overview"></div> */}
            </div>
            <Footer />
        </div>
    )
}