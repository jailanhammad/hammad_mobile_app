import React, { useState } from 'react';
import './contactus.css';

const ContactUs = ({ lang = 'en' }) => {
    const isAr = lang === 'ar';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        
 
        setSubmitted(true); 
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div className={`contact-page-container ${isAr ? 'rtl' : 'ltr'}`}>
            <h1 className="contact-title">{isAr ? 'تواصل معنا' : 'Contact Us'}</h1>

            <div className="contact-grid">
                
                <div className="contact-form-card">
                    <h2>{isAr ? 'أرسل لنا رسالة' : 'Send us a message'}</h2>
                    {submitted ? (
                        <div className="success-message">
                            {isAr ? 'تم إرسال رسالتك بنجاح! شكراً لك.' : 'Your message has been sent successfully! Thank you.'}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder={isAr ? 'الاسم الكامل' : 'Full Name'} 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <textarea 
                                    name="message" 
                                    placeholder={isAr ? 'رسالتك...' : 'Your Message...'} 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="contact-submit-btn">
                                {isAr ? 'إرسال الرسالة' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

                <div className="contact-info-card">
                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div className="info-text">
                            <h4>{isAr ? 'العنوان' : 'Our Location'}</h4>
                            <p>{isAr ? 'ش النزهة، مصر الجديدة، القاهرة' : 'Nozha St., Heliopolis, Cairo'}</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div className="info-text">
                            <h4>{isAr ? 'اتصل بنا' : 'Call Us'}</h4>
                            <p>+20 123 456 789</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <div className="info-text">
                            <h4>{isAr ? 'البريد الإلكتروني' : 'Email Us'}</h4>
                            <p>support@domain.com</p>
                        </div>
                    </div>

                    <div className="map-wrapper">
                        <iframe 
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.983968846387!2d31.3323062!3d30.1114406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815d688417931%3A0x6a0860537827e69c!2sNozha%20St%2C%20El-Nozha%2C%20Heliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1690000000000!5m2!1sen!2seg" 
                            width="100%" 
                            height="180" 
                            style={{ border: 0, borderRadius: '15px' }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;