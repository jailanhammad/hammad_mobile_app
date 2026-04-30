import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './servicespage.css';
import serv from '../assets/home/service-hero.svg';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const ServicesPage = () => { 
    const [services, setServices] = useState([]);
  
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

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
      <div className={`services-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
        
        <div className="hero-overlay-container">
            <img src={serv} alt="hero" className='hero-bg-img'/>
            
            <div className="hero-content-on-top">
              <h2 className="hero-title-text">
                {isAr ? 'احصل على سعر عادل لسيارتك' : 'Get A Fair Price For Your Car'}
              </h2>
              <div className="hero-footer-row">
                <span className="hero-red-tag">
                  {isAr ? 'بع لنا اليوم' : 'Sell To Us Today'}
                </span>
                <NavLink to="/sell" className="nav-item">
                    <button className="hero-action-btn">
                      {isAr ? 'ابدأ' : 'Start'} <span className="arrow-flip">{isAr ? '←' : '→'}</span>
                    </button>
                </NavLink>
              </div>
            </div>
        </div>
  
        <h3 className="section-title-00">
          {isAr ? 'فئات الخدمات' : 'Service Categories'}
        </h3>
  
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{renderIcon(service.icon_name)}</div>
              <h4>{isAr ? service.title_ar : service.title_en}</h4>
              <p>{isAr ? service.desc_ar : service.desc_en}</p>
              <div className="service-arrow">{isAr ? '←' : '→'}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesPage;