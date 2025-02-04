import { Link } from 'react-router-dom';
import '../styles/service-digital.css'

const VirtualAss = () => {
    return (
        <section className="service virtual-assistant" style={{ backgroundColor: '#eef5f9', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title" style={{ fontSize: '36px', fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Virtual Assistant Services
                </h2>
                <p className="section-description" style={{ fontSize: '18px', textAlign: 'center', color: 'gray', marginBottom: '40px', fontWeight: '600'}}>
                    Get professional assistance to handle your tasks efficiently. Our virtual assistants offer administrative, technical, and creative support to help you stay productive.
                </p>

                <div className="services-cards" >
                    {/* Administrative Support */}
                    <div className="service-card" >
                        <img src="./src/assets/virtualass.jpg" alt="Administrative Support" className="service-icon" />
                        <h3 className="service-title" >
                            Administrative Support
                        </h3>
                        <p className="service-description" >
                            Manage emails, schedule appointments, and handle data entry with ease and efficiency.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Social Media Management */}
                    <div className="service-card" >
                        <img src="./src/assets/s-media.jpg" alt="Social Media Management" className="service-icon"  />
                        <h3 className="service-title" >
                            Social Media Management
                        </h3>
                        <p className="service-description" >
                            We create and manage content, engage with audiences, and grow your online presence.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Customer Support */}
                    <div className="service-card" >
                        <img src="./src/assets/c-support.jpg" alt="Customer Support" className="service-icon" />
                        <h3 className="service-title" >
                            Customer Support
                        </h3>
                        <p className="service-description" >
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