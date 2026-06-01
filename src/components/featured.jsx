import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './featured.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const Featured = () => { 
  const [car, setCar] = useState(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from('featured_cars')
        .select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
        return;
      }

      if (data && data.length > 0) {
        setCar(data[0]); 
      }
    };
    fetchFeatured();
  }, []);

  if (!car) return null; 

  const isAr = currentLang === 'ar';

  return (
    <div className={`mobile-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="featured-card">
        <img 
          src={car.image_url}
          alt={isAr ? car.car_title_ar : car.car_title_en} 
          className="featured-image" 
        />
        
        <div className="overlay"></div>

        <div className="content-container">
          <div className="badge">
            <span className="badge-text">
              {isAr ? car.badge_text_ar : car.badge_text_en}
            </span>
          </div>
          
          <h1 className="car-title">
            {isAr ? car.car_title_ar : car.car_title_en}
          </h1>
          
          <div className="footer-row">
            <span className="price">
              {isAr ? car.price_ar : car.price_en} 
              <span style={{ fontSize: '0.6em', marginLeft: '5px' }}>
                 {isAr ? 'ج.م' : 'EGP'}
              </span>
            </span>
            
            <NavLink to="/carpage" className="brand-navlink" end>
              <div className="arrow-icon">
                <span>{isAr ? '←' : '→'}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;