import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import './cardetails.css';
import { useTranslation } from 'react-i18next';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    
    const { i18n } = useTranslation();
    const lang = i18n.language || 'en'; 

    useEffect(() => {
        const fetchCarDetails = async () => {
        const { data, error } = await supabase
        .from('app_cardetails')
        .select('*')
        .limit(1)
        .single();

            if (error) console.error(error);
            else setCar(data);
        };
        fetchCarDetails();
    }, [id]);

    if (!car) return <div className="loading">{lang === 'en' ? 'Loading...' : 'جاري التحميل...'}</div>;

    const t = (en, ar) => (lang === 'en' ? en : ar);

    return (
        <div className={`details-container ${lang === 'ar' ? 'rtl' : ''}`}>
            <div className="car-image-section">
                <img src={car.image_url} className="main-car-img" alt={car.model_en} />
            </div>

            <div className="car-main-info">
                <div className="car-title">
                    <h2>{t(car.model_en, car.model_ar)}</h2>
                    <p>{car.year} • {t(car.type_en, car.type_ar)}</p>
                </div>
                <div className="car-price">
                    <span className="price-tag">{car.price?.toLocaleString()} {t('EGP', 'جنيه')}</span>
                    <span className="monthly-tag">{t('or', 'أو')} {car.monthly_payment?.toLocaleString()} {t('/mo', 'ج.م/شهر')}</span>
                </div>
            </div>

            <div className="specs-grid-top">
                <div className="spec-card">
                    <span className="spec-value">{car.top_speed_mph} {t('mph', 'كم/س')}</span>
                    <span className="spec-label">{t('Top Speed', 'السرعة القصوى')}</span>
                </div>
                <div className="spec-card">
                    <span className="spec-value">{car.horsepower} {t('HP', 'حصان')}</span>
                    <span className="spec-label">{t('Power', 'القوة')}</span>
                </div>
            </div>

            <div className="specifications-table">
                <h3>{t('Specifications', 'المواصفات')}</h3>
                <div className="spec-row">
                    <span className="row-label">{t('Engine', 'المحرك')}</span>
                    <span className="row-value">{t(car.engine_en, car.engine_ar)}</span>
                </div>
                <div className="spec-row">
                    <span className="row-label">{t('Transmission', 'ناقل الحركة')}</span>
                    <span className="row-value">{t(car.transmission_en, car.transmission_ar)}</span>
                </div>
                <div className="spec-row">
                    <span className="row-label">{t('0-60 mph', 'تسارع 0-60')}</span>
                    <span className="row-value">{car.zero_to_sixty} {t('seconds', 'ثواني')}</span>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;