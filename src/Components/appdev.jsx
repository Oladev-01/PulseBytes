import { Link } from 'react-router-dom';
import '../styles/service-digital.css';


const AppDev = () => {
    return (
        <section className="service app-design-development" style={{ backgroundColor: 'var(--color-dark)', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-light)', textAlign: 'center', marginBottom: '20px' }}>
                    App Design & Development Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: 'var(--color-light)', marginBottom: '40px', fontWeight: '600' }}>
                    We specialize in building intuitive, user-friendly, and high-performance mobile apps. Our app design and development services ensure that your mobile presence is seamless across devices and provides an excellent user experience.
                </p>

                <div className="services-cards" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Mobile App Design Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/app-dev.png" alt="Mobile App Design" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Mobile App Design
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We design visually stunning and user-friendly mobile applications that provide seamless navigation and engage users with elegant, intuitive interfaces.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Mobile App Development Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/mobile-app.jpg" alt="Mobile App Development" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Mobile App Development
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            Our expert developers create powerful, scalable, and high-performance mobile applications that work flawlessly on Android and iOS devices.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Cross-Platform Development Card */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/cross-pt.jpg" alt="Cross-Platform App" className="service-icon"/>
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Cross-Platform Apps
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We specialize in building cross-platform applications that provide a native-like experience across both iOS and Android with a single codebase.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppDev;