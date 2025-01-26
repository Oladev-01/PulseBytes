import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import { Nav } from './nav';
import { Footer } from './footer';
import aboutImage from '../assets/pbytes-abt.jpg';

export const About = () => {
    return (
        <div className="about">
            <Nav />
            <div className="body">
                <header className="about-header">
                    <img src={aboutImage} alt="About PulseBytes" />
                    <div className="abt-hero">
                        <h1>About Us</h1>
                        <p>
                            Empowering businesses with innovative digital solutions, PulseBytes is your trusted partner for modern web development, data analytics, and seamless technology integration.
                        </p>
                        <span>
                            <Link to="/contact">Contact us</Link>
                        </span>
                    </div>
                </header>
                <section className="abt-history">
                    <h2>Our History</h2>
                    <p>PulseBytes Digital Solutions was established in [Year] with the vision of empowering businesses through innovative technology. From humble beginnings, PulseBytes started as a small team of tech enthusiasts dedicated to delivering bespoke web development services to local businesses.</p>

                    <p>As demand for modern solutions grew, PulseBytes expanded its expertise into data analytics, enabling clients to unlock actionable insights and make data-driven decisions. Recognizing the importance of seamless technology integration, the company soon began offering comprehensive services that bridged the gap between traditional systems and cutting-edge digital tools.</p>

                    <p>In [Year], PulseBytes marked a significant milestone by partnering with leading global technology firms, which propelled its growth and broadened its service offerings. This strategic move allowed the company to venture into diverse industries, providing solutions tailored to healthcare, education, retail, and finance, among others.</p>

                    <p>Today, PulseBytes is recognized as a trusted partner for businesses seeking transformative digital solutions. With [X] years of experience, the company takes pride in its ability to customize services to meet unique client needs, offering exceptional value without compromising on quality.</p>

                    <p>At PulseBytes, our mission remains clear: to harness the power of technology and drive meaningful impact for businesses worldwide.</p>

                    <p>We specialize in crafting tailored digital solutions, whether you need a fully customized website, data-driven analytics, seamless technology integration, or a reliable virtual assistant to enhance productivity. Our solutions ensure your business stays ahead of the competition while streamlining operations and maximizing efficiency.</p>

                    <div className="abt-history-mission">
                        <div className="line-bar"></div>
                        <div className="history-mission">
                            <p>We create custom digital solutions, including websites, data analytics, technology integration, and virtual assistants, to boost productivity and keep your business ahead of the competition.</p>
                            <span>
                                <Link to="/contact">Contact us</Link>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="abt-mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission at PulseBytes Digital Solutions is to empower businesses by delivering innovative, tailored digital solutions that drive growth, efficiency, and competitive advantage. We specialize in crafting custom websites, leveraging data-driven analytics, integrating cutting-edge technologies, and providing seamless virtual assistant services to enhance productivity. Through our commitment to excellence, we bridge the gap between traditional systems and modern tools, enabling our clients to thrive in an ever-evolving digital landscape. At PulseBytes, we are dedicated to transforming ideas into impactful solutions that make a meaningful difference for businesses worldwide.</p>

                    <div className="abt-mission-values">
                        <div className="mission-values">
                            <h3>Our Values</h3>
                            <ul>
                                <li>Customer-Centric Approach</li>
                                <li>Innovation and Creativity</li>
                                <li>Quality and Excellence</li>
                                <li>Integrity and Transparency</li>
                                <li>Collaboration and Teamwork</li>
                                <li>Continuous Learning and Growth</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};
