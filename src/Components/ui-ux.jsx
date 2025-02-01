import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/service-digital.css';


const UiUx = () => {
    return (
        <section className="service ui-ux-design" style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    UI/UX Design Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: '#555', marginBottom: '40px', fontWeight: '600' }}>
                    We craft seamless and engaging digital experiences by blending creativity, user behavior analysis, and innovative design principles to enhance usability and aesthetics.
                </p>

                <div className="services-cards" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                    {/* UX Research & Strategy */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/ux.jpg" alt="UX Research & Strategy" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            UX Research & Strategy
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We analyze user behavior, conduct research, and create strategies to improve usability and maximize engagement.
                        </p>
                        <Link to="/contact" className="service-link1" >Contact us</Link>
                    </div>

                    {/* UI Design & Prototyping */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/ui.jpg" alt="UI Design & Prototyping" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            UI Design & Prototyping
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We design visually appealing, interactive prototypes and interfaces that align with user needs and business goals.
                        </p>
                        <Link to="/contact" className="service-link1">Contact us</Link>
                    </div>

                    {/* Usability Testing */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/usability-test.jpg" alt="Usability Testing" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Usability Testing
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We conduct in-depth usability testing to refine designs, improve functionality, and enhance user satisfaction.
                        </p>
                        <Link to="/contact" className="service-link1" >Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default UiUx;
