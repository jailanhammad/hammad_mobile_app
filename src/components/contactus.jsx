import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './contactus.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [contactInfo, setContactInfo] = useState({ phone: '', email: '', address_en: '', address_ar: '' });

    useEffect(() => {
        const fetchInfo = async () => {
            const { data } = await supabase.from('app_contact_info').select('*').maybeSingle();
            if (data) setContactInfo(data);
        };
        fetchInfo();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { error } = await supabase.from('contact_messages').insert([
            { 
                full_name: formData.name, 
                email: formData.email, 
                message: formData.message 
            }
        ]);

        if (!error) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); 
        } else {
            alert(isAr ? 'عذراً، حدث خطأ أثناء الإرسال' : 'Error sending message');
        }
        
        
        if (!error) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className={`contact-page-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="contact-content-wrapper">

            <div className="contact-header">
                    <h1 className="contact-main-title">
                        {isAr ? 'تواصل مع' : 'Get in'} <span>{isAr ? 'الخبراء' : 'Touch'}</span>
                    </h1>
                    <div className="line-divider"></div>
                    <span className="section-label-0">{isAr ? 'اتصل بنا' : 'CONTACT'}</span>
                </div>
                
                <div className="contact-grid">
                    <div className="contact-form-card glass-effect">
                        <h3>{isAr ? 'أرسل لنا رسالة' : 'Send us a message'}</h3>
                        {submitted ? (
                            <div className="success-overlay">
                                <FaPaperPlane className="success-icon" />
                                <p>{isAr ? 'تم الإرسال بنجاح' : 'Message Sent'}</p>
                            </div>
                        ) : (
                            // <form onSubmit={handleSubmit}>
                            //     <input name="name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} placeholder={isAr ? 'الاسم' : 'Name'} required />
                            //     <input name="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} placeholder={isAr ? 'الإيميل' : 'Email'} required />
                            //     <textarea name="message" value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} placeholder={isAr ? 'الرسالة' : 'Message'} required></textarea>
                            //     <button type="submit" className="contact-submit-btn">{isAr ? 'إرسال' : 'SEND'}</button>
                            // </form>
                            <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={isAr ? 'الاسم الكامل' : 'Full Name'} 
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={isAr ? 'البريد الإلكتروني' : 'Email Address'} 
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <textarea 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleInputChange}
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
                                <h4>{isAr ? 'العنوان' : 'Location'}</h4>
                                <p>{isAr ? contactInfo.address_ar : contactInfo.address_en}</p>
                            </div>
                        </div>
                        <div className="info-tile glass-effect">
                            <FaPhoneAlt className="info-icon-red" />
                            <div>
                                <h4>{isAr ? 'اتصل بنا' : 'Call'}</h4>
                                <p dir="ltr">{contactInfo.phone}</p>
                            </div>
                        </div>
                        <div className="info-tile glass-effect">
                            <FaEnvelope className="info-icon-red" />
                            <div>
                                <h4>{isAr ? 'البريد' : 'Email'}</h4>
                                <p>{contactInfo.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


             
             <div className="map-wrapper">
   <iframe
    
        title="hammad-motors-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.495688798003!2d31.346522475847998!3d30.108626415526466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815de0d1b4313%3A0x298a65406d8b0f2b!2sHamad%20Motorz!5e0!3m2!1sen!2seg!4v1778950369903!5m2!1sen!2seg"
        width="100%"
        height="180"
        style={{ border: 0, borderRadius: '15px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    >   
    </iframe>

           </div>
        </div>
    );
};

export default ContactUs;