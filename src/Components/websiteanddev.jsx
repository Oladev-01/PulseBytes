import { Link } from 'react-router-dom';
import '../styles/service-digital.css'

const WebsiteAndDev = () => {
    return (
        <section className="service website-design-development" style={{ backgroundColor: 'var(--color-light)', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Website Design & Development Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: 'gray', marginBottom: '40px', fontWeight: '600' }}>
                    Our website design and development services focus on creating engaging, user-friendly, and fully responsive websites that align with your brand’s goals. We provide end-to-end solutions for building modern websites, from creative design to seamless development.
                </p>

                <div className="services-cards">
                    {/* Web Design Card */}
                    <div className="service-card">
                        <img src="/assets/c-webdev.jpg" alt="Web Design" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Custom Web Design
                        </h3>
                        <p className="service-description">
                            We create unique, visually appealing website designs tailored to your brand's identity and user experience needs, ensuring your site stands out.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Web Development Card */}
                    <div className="service-card" >
                        <img src="/assets/webdev.jpg" alt="Web Development" className="service-icon" />
                        <h3 className="service-title">
                            Web Development
                        </h3>
                        <p className="service-description" >
                            Our development team builds robust and scalable websites using the latest technologies to ensure functionality, security, and performance.
                        </p>
                        <Link to="/contact" className="service-link" >Contact us</Link>
                    </div>

                    {/* E-Commerce Development Card */}
                    <div className="service-card" >
                        <img src="/assets/e-com.jpg" alt="E-Commerce Development" className="service-icon"  />
                        <h3 className="service-title" >
                            E-Commerce Solutions
                        </h3>
                        <p className="service-description" >
                            We specialize in building fully functional e-commerce platforms that offer seamless user experiences, integrated payment systems, and customizable features.
                        </p>
                        <Link to="/contact" className="service-link" >Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WebsiteAndDev;
