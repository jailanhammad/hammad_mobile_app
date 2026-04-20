import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './explore.css';
import { NavLink } from "react-router-dom"; 


const ExploreSection = ({ lang = 'en' }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await supabase
        .from('explore_cars')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (data) setCars(data);
    };
    fetchCars();
  }, []);

  const isAr = lang === 'ar';

  return (
    <section className={`exp-section ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="exp-header">
        <h2 className="exp-title">
            {isAr ? 'السيارات' : 'Vehicles'}
        </h2>
        <NavLink to="/vehicles" className="view-all">
        <a href="#all" className="view-all">
            {isAr ? 'عرض الكل' : 'View All'} <span>{isAr ? '‹' : '›'}</span>
        </a>
        </NavLink>

      </div>

      <div className="card-slider">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="img-box">
              <img src={car.image_url} alt={isAr ? car.name_ar : car.name_en} className="car-img" />
              <span className="type-tag">
                {isAr ? car.type_tag_ar : car.type_tag_en}
              </span>
              <button className="fav-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>

            <div className="car-info">
              <div className="title-row">
                <h3>{isAr ? car.name_ar : car.name_en}</h3>


            <NavLink to="/carpage" className="brand-navlink" end>
            <div className="arrow-icon">
            <span className="arrow-icon">{isAr ? '←' : '→'}</span>
            </div>
            </NavLink>

              </div>
              <p className="year">{car.year}</p>
              <p className="specs">{isAr ? car.specs_ar : car.specs_en}</p>
              <div className="price-row">
                <span className="main-price">{isAr ? car.main_price_ar : car.main_price_en}</span>
                {car.monthly_price_en && (
                  <span className="monthly">{isAr ? car.monthly_price_ar : car.monthly_price_en}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;