import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './mostsold.css';

const Mostsold = ({ lang = 'en' }) => {
  const [soldCars, setSoldCars] = useState([]);

  useEffect(() => {
    const fetchSoldCars = async () => {
      const { data } = await supabase
        .from('most_sold_cars')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (data) setSoldCars(data);
    };
    fetchSoldCars();
  }, []);

  const isAr = lang === 'ar';

  return (
    <section className={`pop-section ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="pop-header">
        <div className="pop-title-box">
          <h2 className="pop-title">
            {isAr ? 'الأكثر مبيعاً' : 'Most Sold'}
          </h2>
        </div>
        <a href="#all" className="view-link">
            {isAr ? 'عرض الكل' : 'View All'} <span>{isAr ? '‹' : '›'}</span>
        </a>
      </div>

      <div className="pop-list">
        {soldCars.map((car) => (
          <div key={car.id} className="pop-card">
            <div className="pop-img-area">
              <img src={car.image_url} alt={isAr ? car.name_ar : car.name_en} className="p-img" />
              <span className="p-tag">
                {isAr ? car.type_tag_ar : car.type_tag_en}
              </span>
              <button className="p-fav">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>
            
            <div className="p-details">
              <div className="p-row">
                <h3>{isAr ? car.name_ar : car.name_en}</h3>
                <span className="p-arrow">{isAr ? '←' : '→'}</span>
              </div>
              <p className="p-year">{car.year}</p>
              <p className="p-specs">{isAr ? car.specs_ar : car.specs_en}</p>
              <div className="p-price-row">
                <span className="p-price">{isAr ? car.price_ar : car.price_en}</span>
                {car.monthly_price_en && (
                  <span className="p-month">{isAr ? car.monthly_price_ar : car.monthly_price_en}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mostsold;