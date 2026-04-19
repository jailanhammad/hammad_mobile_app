import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './servicespage.css';
import serv from '../assets/home/service-hero.svg';
import { NavLink } from "react-router-dom"; 


const ServicesPage = ({ lang = 'en' }) => {
    const [services, setServices] = useState([]);
  
    useEffect(() => {
      const fetchServices = async () => {
        const { data, error } = await supabase.from('hammad_services').select('*');
        if (!error) setServices(data);
      };
      fetchServices();
    }, []);
  
    const renderIcon = (name) => {
      const icons = {
        wrench: '🔧',
        car: '🚗',
        dollar: '💲',
        shield: '🛡️'
      };
      return icons[name] || '⚙️';
    };
  
    return (
      <div className={`services-container ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
        
   <div className="hero-overlay-container">
        <img src={serv} alt="hero" className='hero-bg-img'/>
        
        <div className="hero-content-on-top">
          <h2 className="hero-title-text">
            {lang === 'en' ? 'Get A Fair Price For Your Car' : 'احصل على سعر عادل لسيارتك'}
          </h2>
          <div className="hero-footer-row">
            <span className="hero-red-tag">
              {lang === 'en' ? 'Sell To Us Today' : 'بع لنا اليوم'}
            </span>
            <NavLink to="/sell" className="nav-item">
            <button className="hero-action-btn">
              {lang === 'en' ? 'Start' : 'ابدأ'} <span>→</span>
            </button>
            </NavLink>

          </div>
        </div>
      </div>
  
        <h3 className="section-title-00">
          {lang === 'en' ? 'Service Categories' : 'فئات الخدمات'}
        </h3>
  
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{renderIcon(service.icon_name)}</div>
              <h4>{lang === 'en' ? service.title_en : service.title_ar}</h4>
              <p>{lang === 'en' ? service.desc_en : service.desc_ar}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesPage;