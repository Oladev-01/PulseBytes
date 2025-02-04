import { Link } from 'react-router-dom';
import '../styles/service-digital.css';


const AppDev = () => {
    return (
        <section className="service app-design-development" style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-dark)', textAlign: 'center', marginBottom: '20px' }}>
                    App Design & Development Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: 'gray', marginBottom: '40px', fontWeight: '600' }}>
                    We specialize in building intuitive, user-friendly, and high-performance mobile apps. Our app design and development services ensure that your mobile presence is seamless across devices and provides an excellent user experience.
                </p>

                <div className="services-cards" >
                    {/* Mobile App Design Card */}
                    <div className="service-card" >
                        <img src="./src/assets/app-dev.png" alt="Mobile App Design" className="service-icon" />
                        <h3 className="service-title" >
                            Mobile App Design
                        </h3>
                        <p className="service-description" id='service-description0'>
                            We design visually stunning and user-friendly mobile applications that provide seamless navigation and engage users with elegant, intuitive interfaces.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Mobile App Development Card */}
                    <div className="service-card" >
                        <img src="./src/assets/mobile-app.jpg" alt="Mobile App Development" className="service-icon" />
                        <h3 className="service-title" >
                            Mobile App Development
                        </h3>
                        <p className="service-description"  id='service-description2'>
                            Our expert developers create powerful, scalable, and high-performance mobile applications that work flawlessly on Android and iOS devices.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Cross-Platform Development Card */}
                    <div className="service-card" >
                        <img src="./src/assets/cross-pt.jpg" alt="Cross-Platform App" className="service-icon"/>
                        <h3 className="service-title" >
                            Cross-Platform Apps
                        </h3>
                        <p className="service-description" id='service-description4'>
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