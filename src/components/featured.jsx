import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './featured.css';

const Featured = ({ lang = 'en' }) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from('featured_cars')
        .select('*')
        .single(); 
      
      if (data) setCar(data);
    };
    fetchFeatured();
  }, []);

  if (!car) return null; 

  const isAr = lang === 'ar';

  return (
    <div className={`mobile-container ${isAr ? 'rtl' : 'ltr'}`}>
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
            </span>
            
            <div className="arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d={isAr ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;