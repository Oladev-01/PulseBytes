import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import { Nav } from './nav';
import { Footer } from './footer';

export const About = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const faqItems = [
        {
            question: 'What services do you offer?',
            answer: 'We specialize in creating custom digital solutions, including website development, data analytics, technology integration, and virtual assistant services to streamline your business operations.',
        },
        {
            question: 'How can a custom website help my business?',
            answer: 'A custom website tailored to your business needs ensures a unique online presence, increases customer engagement, and drives conversions, ultimately boosting your business\'s growth.',
        },
        {
            question: 'What is data-driven analytics, and how can it benefit my business?',
            answer: 'Data-driven analytics allows you to make informed decisions by analyzing data trends, customer behavior, and performance metrics. This helps optimize business strategies and improves operational efficiency.',
        },
        {
            question: 'What is technology integration?',
            answer: 'Technology integration involves seamlessly connecting your existing systems with cutting-edge digital tools to improve business processes, enhance productivity, and streamline operations.',
        },
        {
            question: 'How can a virtual assistant enhance my productivity?',
            answer: 'A virtual assistant can handle routine tasks such as scheduling, customer service, and administrative work, freeing up your time to focus on more strategic aspects of your business.',
        },
        {
            question: 'Do you offer custom solutions for different industries?',
            answer: 'Yes, we provide tailored solutions for various industries, including healthcare, retail, finance, and education, ensuring that each solution meets the specific needs of the sector.',
        },
    ];
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };

    return (
        <div className={styles.about}>
            <Nav />
            <div className={styles.serviceBody}>
                <div className={styles.aboutHeader}>
                    <img src="./src/assets/pbytes-abt.jpg" alt="About PulseBytes" />
                    <div className={styles.abtHero}>
                        <h1>About Us</h1>
                        <p>
                            Empowering businesses with innovative digital solutions, PulseBytes is your trusted partner for modern web development, data analytics, and seamless technology integration.
                        </p>
                        <span>
                            <Link to="/contact">Contact us</Link>
                        </span>
                    </div>
                </div>
                <section className={styles.abtHistory}>
                    <h2>Our History</h2>
                    <p>PulseBytes Digital Solutions was established in [Year] with the vision of empowering businesses through innovative technology. From humble beginnings, PulseBytes started as a small team of tech enthusiasts dedicated to delivering bespoke web development services to local businesses.</p>

                    <p>As demand for modern solutions grew, PulseBytes expanded its expertise into data analytics, enabling clients to unlock actionable insights and make data-driven decisions. Recognizing the importance of seamless technology integration, the company soon began offering comprehensive services that bridged the gap between traditional systems and cutting-edge digital tools.</p>

                    <p>In [Year], PulseBytes marked a significant milestone by partnering with leading global technology firms, which propelled its growth and broadened its service offerings. This strategic move allowed the company to venture into diverse industries, providing solutions tailored to healthcare, education, retail, and finance, among others.</p>

                    <p>Today, PulseBytes is recognized as a trusted partner for businesses seeking transformative digital solutions. With [X] years of experience, the company takes pride in its ability to customize services to meet unique client needs, offering exceptional value without compromising on quality.</p>

                    <p>At PulseBytes, our mission remains clear: to harness the power of technology and drive meaningful impact for businesses worldwide.</p>

                    <p>We specialize in crafting tailored digital solutions, whether you need a fully customized website, data-driven analytics, seamless technology integration, or a reliable virtual assistant to enhance productivity. Our solutions ensure your business stays ahead of the competition while streamlining operations and maximizing efficiency.</p>

                    <div className={styles.abtHistoryMission}>
                        <div className={styles.lineBar}></div>
                        <div className={styles.historyMission}>
                            <p>We create custom digital solutions, including websites, data analytics, technology integration, and virtual assistants, to boost productivity and keep your business ahead of the competition.</p>
                            <span>
                                <Link to="/contact">Contact us</Link>
                            </span>
                        </div>
                    </div>
                </section>
                <section className={styles.abtMission}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission at PulseBytes Digital Solutions is to empower businesses by delivering innovative, tailored digital solutions that drive growth, efficiency, and competitive advantage. We specialize in crafting custom websites, leveraging data-driven analytics, integrating cutting-edge technologies, and providing seamless virtual assistant services to enhance productivity. Through our commitment to excellence, we bridge the gap between traditional systems and modern tools, enabling our clients to thrive in an ever-evolving digital landscape. At PulseBytes, we are dedicated to transforming ideas into impactful solutions that make a meaningful difference for businesses worldwide.</p>

                    <div className={styles.abtMissionValues}>
                        <h2>Our Core Values</h2>
                        <div className={styles.coreValues}>
                            <ul>
                                <li><strong>Innovation:</strong> We embrace creativity and cutting-edge technologies to craft unique digital solutions tailored to your business needs.</li>
                                <li><strong>Client-Centricity:</strong> Your success is our priority. We listen, understand, and deliver solutions that align with your goals.</li>
                                <li><strong>Excellence:</strong> We are committed to delivering high-quality services, from web development to seamless technology integration.</li>
                                <li><strong>Efficiency:</strong> Through data-driven analytics and virtual assistant services, we help you streamline operations and maximize productivity.</li>
                                <li><strong>Collaboration:</strong> We believe in building strong partnerships with our clients, ensuring open communication and mutual success.</li>
                                <li><strong>Adaptability:</strong> Our solutions are flexible, scalable, and designed to meet the dynamic needs of diverse industries.</li>
                                <li><strong>Integrity:</strong> We uphold transparency, honesty, and professionalism in every project we undertake.</li>
                            </ul>
                            <img src='./src/assets/pbytes-value1.jpg' alt='PulseBytes Core Values image' />
                        </div>

                    </div>
                </section>
                <section className={styles.testimonials}>
                    <h2>What Our Clients Say</h2>
                    <div className={styles.testimonialContainer}>
                        <div className={styles.testimonial}>
                            <p>"PulseBytes transformed our business! Their tailored web solutions and data analytics have taken our operations to the next level. Highly recommend their services!"</p>
                            <span>- Jane Doe, CEO of TechWave Solutions</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"The virtual assistant services provided by PulseBytes have significantly boosted our productivity. Their attention to detail and dedication to excellence are unmatched."</p>
                            <span>- John Smith, Founder of EcoRetail</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"Seamless technology integration was exactly what we needed. PulseBytes made the entire process smooth and hassle-free. Amazing team!"</p>
                            <span>- Sarah Lee, Manager at EduConnect</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"Working with PulseBytes has been a game-changer. Their innovative solutions and customer-centric approach are second to none. We’re thrilled with the results!"</p>
                            <span>- Michael Brown, Director of HealthCareNow</span>
                        </div>
                    </div>
                </section>
                <section className={styles.processSection}>
                    <div className={styles.ourProcess}>
                        <h2>Our Process</h2>
                        <p>At PulseBytes, we follow a streamlined process to ensure that every project we undertake is a success. Here's how we bring your ideas to life:</p>
                        <ol>
                            <li>
                                <div className={styles.content}>
                                    <h3>1. Discovery & Consultation</h3>
                                    <p>We begin by understanding your business needs, goals, and challenges. Through collaborative discussions, we gather insights to tailor our solutions to your requirements.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <h3>2. Planning & Strategy</h3>
                                    <p>Our team crafts a comprehensive strategy and roadmap, ensuring every detail is accounted for to deliver exceptional results on time and within budget.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <h3>3. Design & Development</h3>
                                    <p>Using cutting-edge tools and best practices, we design and develop solutions that are not only functional but also visually stunning and user-friendly.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <h3>4. Testing & Quality Assurance</h3>
                                    <p>We rigorously test every aspect of the project to ensure it meets our high standards of quality, functionality, and security before deployment.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <h3>5. Deployment & Launch</h3>
                                    <p>Once everything is perfected, we launch your project and ensure a seamless transition, providing training and support as needed.</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.content}>
                                    <h3>6. Ongoing Support & Optimization</h3>
                                    <p>Our partnership doesn't end at launch. We offer ongoing support, updates, and optimization to ensure your solutions continue to deliver value over time.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
                <div className={styles.justImages}>
                    <img src="./src/assets/pbytes-values2.jpg" alt="pbytes image" /><img src="./src/assets/pbytes-values3.jpg" alt="" /><img src="./src/assets/pbytes-values4.jpg" alt="" /><img src="./src/assets/pbytes-values5.jpg" alt="" />
                </div>
                <section className={styles.faq}>
                    <h2>Frequently Asked Questions</h2>
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className={styles.question}>{item.question}</h3>
                            {activeIndex === index && <p className="answer">{item.answer}</p>}
                        </div>
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    );
};