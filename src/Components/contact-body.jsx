import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/contact-body.css';

const ContactBody = () => {
    const form = useRef();
    const year = new Date().getFullYear();
    const [CaptchValue, setCaptchValue] = useState('');
    const sitekey = import.meta.env.VITE_SITEKEY;
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const userId = import.meta.env.VITE_USERID;
    
    const handleCaptcha = (value) => {
        setCaptchValue(value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!CaptchValue) {
            alert('Please verify that you are not a robot');
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, userId)
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }
    return (
        <div className="contact-container">
            <section className="hero-section">
                <h1>Let's Build Something Great Together</h1>
                <p>Reach out for inquiries, collaborations, or a custom quote.</p>
                <a href="#contact-form" className="cta-button">Get in Touch</a>
            </section>

            <section className="contact-form-section" id="contact-form">
                <h2>Contact Us</h2>
                <p>Tell us how we can help you.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name='name' placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name='email' placeholder="Your Email" required />

                    <label htmlFor="service-inquiry">Service Inquiry</label>
                    <select id="service-inquiry" name='service' required>
                        <option value="">Select a Service</option>
                        <option value="web-design">Website Design & Development</option>
                        <option value="app-development">App Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="virtual-assistance">Virtual Assistance</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name='message' placeholder="Tell us more about your project" required></textarea>

                    <div className="recaptcha-container">
                        <ReCAPTCHA
                            sitekey={sitekey}
                            onChange={handleCaptcha}
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            <section className="contact-info">
                <h2>Other Ways to Reach Us</h2>
                <p>Email: contact@company.com</p>
                <p>Phone: +123 456 7890</p>
                <p>WhatsApp: <a href="https://wa.me/1234567890">Chat Now</a></p>
            </section>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {/* We can add more faqs */}
                <details>
                    <summary>How long does a project take?</summary>
                    <p>It depends on the project scope. Web design takes 2-4 weeks, apps may take longer.</p>
                </details>
                <details>
                    <summary>Do you offer ongoing support?</summary>
                    <p>Yes! We provide maintenance and updates.</p>
                </details>
            </section>

            <section className="map-section">
                <h2>Find Us</h2>
                <iframe
                    title="Osogbo Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1760149910445!2d4.532244374029209!3d7.782639992251219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787fe8b9b8f29%3A0xa73df6e9f599526e!2sOsogbo%2C%20Osun%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    )
}

export default ContactBody;
