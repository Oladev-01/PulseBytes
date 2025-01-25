import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingpage.css';

export const LandingPage = () => {
    const [isHidden, setIsHidden] = useState(true);
    const currentYear = new Date().getFullYear();

    const toggleMenu = () => {
        setIsHidden(!isHidden);
        console.log("Menu toggled:", isHidden);
    };

    return (
        <div>
            <nav className="project-nav">
                <h2 className="pulse-bytes"><Link to="/" >
                    PulseBytes.
                </Link></h2>
                <ul id="navlink" className={isHidden ? 'hidden' : ''}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    {isHidden && (<li id='hidden-contact' ><Link to="/contact">Contact</Link></li>)}
                </ul>
                <Link to="/contact" id="contact">Contact</Link>
                <div className="menu" id="Menu" onClick={toggleMenu}>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                </div>
            </nav>
            <div className='body'>
                <div className="first-half">
                    <div className="first-half-left">
                        <span>PulseBytes</span>
                        <p>
                            PulseBytes specializes in digital marketing, website design, and app development. We craft impactful digital experiences that boost user engagement and elevate your brand’s online presence. Our tailored solutions drive measurable results, helping your brand stand out in today’s competitive digital landscape.</p>
                    </div>
                    <video autoPlay loop muted playsInline>
                        <source src="/src/assets/pbytes-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="second-half">
                    <span id='second-half-service'>SERVICES</span>
                    <div className="services">
                        <div className="first-service">
                            <div>
                                <span className='title'>Digital Marketing</span>
                                <p>
                                    We craft powerful digital marketing strategies that resonate with your audience, driving meaningful engagement and measurable results. From social media campaigns to targeted advertising, we help your brand stand out in the crowded digital space, ensuring your message reaches the right people at the right time.
                                </p></div>
                            <div>
                                <span className='title'>Website Design and Development</span>
                                <p>Transform your online presence with visually stunning and highly functional websites designed to captivate and convert. Our expert team creates custom websites that are user-friendly, mobile-responsive, and optimized for search engines, ensuring your brand leaves a lasting impression.</p>
                            </div>
                        </div>
                        <div className="second-service">
                            <div>
                                <span className='title'>App Design</span>
                                <p>
                                    Bring your ideas to life with innovative app designs tailored to meet the needs of your audience. We focus on creating intuitive and engaging user experiences, delivering apps that are not only visually appealing but also highly functional and aligned with your brand goals.
                                </p>
                            </div>
                            <div>
                                <span className='title'>UI/UX Design</span>
                                <p>Delight your users with seamless and visually striking UI/UX designs that enhance usability and ensure customer satisfaction. Our designs focus on delivering intuitive navigation and a memorable user experience, making your digital products a joy to interact with.</p>
                            </div>
                        </div>
                        <div className="third-service">
                            <div>
                                <span className='title'> Virtual Assistant Services</span>
                                <p>Streamline your operations and boost productivity with our reliable virtual assistant services. From administrative support to customer engagement, we provide skilled professionals to handle your day-to-day tasks, giving you more time to focus on growing your business.</p>
                            </div>
                            <div>
                                <span className='title'>E-commerce Store Design</span>
                                <p>Elevate your online retail business with custom e-commerce store designs that combine aesthetics and functionality. We create platforms that are easy to navigate, mobile-friendly, and optimized for sales, ensuring a seamless shopping experience for your customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
};
