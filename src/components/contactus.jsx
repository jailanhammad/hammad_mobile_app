import React, { useState } from 'react';
import './contactus.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Galaxy from '../components/galaxy';

const ContactUs = ({ lang = 'en' }) => {
    const isAr = lang === 'ar';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true); 
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div className={`contact-page-container ${isAr ? 'rtl' : 'ltr'}`}>
    
            <div className="contact-content-wrapper">
                <div className="contact-header">
                    <h1 className="contact-main-title">
                        {isAr ? 'تواصل مع' : 'Get in'} <span>{isAr ? 'الخبراء' : 'Touch'}</span>
                    </h1>
                    <div className="line-divider"></div>
                    <span className="section-label">{isAr ? 'اتصل بنا' : 'CONTACT'}</span>

                </div>

                <div className="contact-grid">
                    <div className="contact-form-card glass-effect">
                        <h3>{isAr ? 'أرسل لنا رسالة' : 'Send us a message'}</h3>
                        {submitted ? (
                            <div className="success-overlay">
                                <FaPaperPlane className="success-icon" />
                                <p>{isAr ? 'تم الإرسال بنجاح' : 'Message Sent Successfully'}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder={isAr ? 'الاسم الكامل' : 'Full Name'} 
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} 
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <textarea 
                                        name="message" 
                                        placeholder={isAr ? 'رسالتك...' : 'Your Message...'} 
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="contact-submit-btn">
                                    {isAr ? 'إرسال الآن' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-info-stack">
                        <div className="info-tile glass-effect">
                            <FaMapMarkerAlt className="info-icon-red" />
                            <div>
                                <h4>{isAr ? 'العنوان' : 'Our Location'}</h4>
                                <p>{isAr ? '١٥ ش ابراهيم النجار، مصر الجديدة   ' : '15 Ibrahim El-Naggar St., Heliopolis'}</p>
                            </div>
                        </div>
                        
                        <div className="info-tile glass-effect">
                            <FaPhoneAlt className="info-icon-red" />
                            <div>
                                <h4>{isAr ? 'اتصل بنا' : 'Call Us'}</h4>
                                <p>+20 01000444401</p>
                            </div>
                        </div>

                        <div className="info-tile glass-effect">
                            <FaEnvelope className="info-icon-red" />
                            <div>
                                <h4>{isAr ? 'البريد الإلكتروني' : 'Email Us'}</h4>
                                <p>mahmoud@hammadmotors.com</p>
                            </div>
                        </div>
                    </div>
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
    );
};

export default ContactUs;