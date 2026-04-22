import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './explore.css';
import { NavLink } from "react-router-dom"; 


const ExploreSection = ({ lang = 'en'  }) => {

  const [cars, setCars] = useState([]);
  const isAr = lang === 'ar';

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