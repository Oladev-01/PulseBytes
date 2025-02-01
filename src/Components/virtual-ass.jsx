import { Link } from 'react-router-dom';
import '../styles/service-digital.css'

const VirtualAss = () => {
    return (
        <section className="service virtual-assistant" style={{ backgroundColor: '#eef5f9', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Virtual Assistant Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: '#555', marginBottom: '40px' }}>
                    Get professional assistance to handle your tasks efficiently. Our virtual assistants offer administrative, technical, and creative support to help you stay productive.
                </p>

                <div className="services-cards" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                    {/* Administrative Support */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/virtualass.jpg" alt="Administrative Support" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Administrative Support
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            Manage emails, schedule appointments, and handle data entry with ease and efficiency.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Social Media Management */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/s-media.jpg" alt="Social Media Management" className="service-icon"  />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Social Media Management
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            We create and manage content, engage with audiences, and grow your online presence.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Customer Support */}
                    <div className="service-card" style={{ backgroundColor: '#fff', width: '30%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
                        <img src="./src/assets/c-support.jpg" alt="Customer Support" className="service-icon" />
                        <h3 className="service-title" style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
                            Customer Support
                        </h3>
                        <p className="service-description" style={{ fontSize: '16px', color: '#777', marginBottom: '20px' }}>
                            Provide top-notch customer service through email, chat, and phone support.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default VirtualAss;