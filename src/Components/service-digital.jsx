import { Link } from 'react-router-dom';
import '../styles/service-digital.css'


const ServiceDigital = () => {
    return (
        <section className="services-container digital-marketing" style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 className="section-title">Digital Marketing Services</h2>
                <p className="section-description">
                    Our digital marketing services are designed to help your business grow online. From SEO to social media marketing, we tailor strategies to meet your goals and maximize ROI.
                </p>

                <div className="services-cards" >
                    <div className="service-card">
                        <img src="assets/seo.jpg" alt="SEO" className="service-icon" />
                        <h3 className="service-title">SEO (Search Engine Optimization)</h3>
                        <p className="service-description">
                            Boost your online visibility and drive organic traffic to your website through expert SEO strategies, keyword optimization, and content marketing.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    <div className="service-card" >
                        <img src="/assets/ppc.jpg" alt="PPC" className="service-icon" />
                        <h3 className="service-title">PPC (Pay-Per-Click) Advertising</h3>
                        <p className="service-description">
                            Maximize your marketing budget with targeted ads on Google, Facebook, and other platforms, ensuring your brand reaches the right audience.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>

                    {/* Social Media Marketing Card */}
                    <div className="service-card" id='service-card3'>
                        <img src="/assets/ssm.jpg" alt="Social Media Marketing" className="service-icon" />
                        <h3 className="service-title">Social Media Marketing</h3>
                        <p className="service-description">
                            Engage and grow your audience through strategic social media campaigns across Facebook, Instagram, Twitter, and LinkedIn, designed to increase brand awareness and drive conversions.
                        </p>
                        <Link to="/contact" className="service-link">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ServiceDigital;