import { Link } from 'react-router-dom';
import '../styles/service-digital.css'

const WebsiteAndDev = () => {
    return (
        <section className="service website-design-development" style={{ backgroundColor: '#e0f7fa', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Website Design & Development Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: '#555', marginBottom: '40px', fontWeight: '600' }}>
                    Our website design and development services focus on creating engaging, user-friendly, and fully responsive websites that align with your brand’s goals. We provide end-to-end solutions for building modern websites, from creative design to seamless development.
                </p>

                <div className="services-cards" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Web Design Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/c-webdev.jpg" alt="Web Design" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Custom Web Design
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We create unique, visually appealing website designs tailored to your brand's identity and user experience needs, ensuring your site stands out.
                        </p>
                        <Link to="/contact" className="service-link1">Contact us</Link>
                    </div>

                    {/* Web Development Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/webdev.jpg" alt="Web Development" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Web Development
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            Our development team builds robust and scalable websites using the latest technologies to ensure functionality, security, and performance.
                        </p>
                        <Link to="/contact" className="service-link1" >Contact us</Link>
                    </div>

                    {/* E-Commerce Development Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/e-com.jpg" alt="E-Commerce Development" className="service-icon"  />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            E-Commerce Solutions
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We specialize in building fully functional e-commerce platforms that offer seamless user experiences, integrated payment systems, and customizable features.
                        </p>
                        <Link to="/contact" className="service-link1" >Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WebsiteAndDev;
