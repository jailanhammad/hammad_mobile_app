import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './explore.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const ExploreSection = () => {
  const [cars, setCars] = useState([]);
  
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isAr = currentLang === 'ar';

  useEffect(() => {
    const translations = {
      en: {
        explore: {
          vehicles: "Vehicles",
          viewAll: "View All"
        }
      },
      ar: {
        explore: {
          vehicles: "السيارات",
          viewAll: "عرض الكل"
        }
      }
    };

    Object.keys(translations).forEach((l) => {
      i18n.addResourceBundle(l, 'translation', translations[l], true, true);
    });
  }, [i18n]);

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
    <section className={`exp-section ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="exp-header">
        <h2 className="exp-title">
            {t('explore.vehicles')}
        </h2>
        <NavLink to="/vehicles" className="view-all">
          <div className="view-all">
            {t('explore.viewAll')} <span>{isAr ? '‹' : '›'}</span>
          </div>
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
                {(car.monthly_price_en || car.monthly_price_ar) && (
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