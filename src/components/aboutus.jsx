import React from 'react';
import './aboutus.css';
import logo from '../assets/home/logo-big.svg';
import { NavLink } from "react-router-dom"; 

const AboutUs = ({ lang = 'en' }) => {
    const isAr = lang === 'ar';

    return (
        <div className={`about-container ${isAr ? 'rtl' : 'ltr'}`}>
            <div className="about-header">
                <div className="brand-logo">
                    <span className="logo-dot">
                        <img src={logo} alt="logo" />
                    </span>
                </div>
                <h1>{isAr ? 'من نحن' : 'About Us'}</h1>
            </div>

            <div className="about-card">
                <p>
                    {isAr 
                        ? 'نحن نوفر لك أفضل تجربة لبيع وشراء السيارات بأحدث تقنيات الذكاء الاصطناعي والواقع المعزز.' 
                        : 'We provide you with the best experience to buy and sell cars using the latest AI and AR technologies.'}
                </p>
            </div>

            <div className="stats-grid">
                <div className="stat-item">
                    <h3>10K+</h3>
                    <span>{isAr ? 'مستخدم' : 'Users'}</span>
                </div>
                <div className="stat-item">
                    <h3>500+</h3>
                    <span>{isAr ? 'سيارة' : 'Cars'}</span>
                </div>
            </div>

            <NavLink to="/contact" className="nav-item" end>
            <button className="contact-btn">
                {isAr ? 'تواصل معنا' : 'Contact Us'}
            </button>
            </NavLink>

        </div>
    );
};

export default AboutUs;