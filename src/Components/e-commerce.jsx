import { Link } from 'react-router-dom';
import '../styles/service-digital.css';

const Ecommerce = () => {
    return (
        <section className="service e-commerce-services" style={{ backgroundColor: 'white', padding: '80px 0' }} id='ecommerce-section'>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title">
                    E-Commerce Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: 'gray', marginBottom: '40px', fontWeight: '600' }}>
                    We help businesses build and scale powerful online stores with seamless shopping experiences, secure transactions, and optimized performance.
                </p>

                <div className="services-cards">
                    {/* Custom E-Commerce Development */}
                    <div className="service-card">
                        <img src="/assets/ecommerce.jpg" alt="Custom E-Commerce Development" className="service-icon" />
                        <h3 className="service-title">
                            Custom E-Commerce Development
                        </h3>
                        <p className="service-description">
                            We create tailored e-commerce solutions that fit your business needs, ensuring high performance and flexibility.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Payment Gateway Integration */}
                    <div className="service-card">
                        <img src="/assets/payment-gateway.jpg" alt="Payment Gateway Integration" className="service-icon" />
                        <h3 className="service-title">
                            Payment Gateway Integration
                        </h3>
                        <p className="service-description">
                            Secure and seamless payment processing with multiple gateways to enhance customer trust and convenience.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* E-Commerce SEO & Marketing */}
                    <div className="service-card">
                        <img src="/assets/seo-marketing.jpg" alt="E-Commerce SEO & Marketing" className="service-icon" />
                        <h3 className="service-title">
                            E-Commerce SEO & Marketing
                        </h3>
                        <p className="service-description">
                            Increase visibility and drive more sales with expert SEO, digital marketing, and conversion optimization strategies.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Ecommerce;