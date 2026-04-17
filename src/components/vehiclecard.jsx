import React, { useState, useEffect } from 'react';
import './vehiclecard.css';

const VehicleCard = ({ vehicle, lang = 'en' }) => {
    const isAr = lang === 'ar';

    const [isFavorite, setIsFavorite] = useState(vehicle?.is_favorite || false);


    return (


                <div className={`vehicle-card ${isAr ? 'rtl' : 'ltr'}`}>
                    <div className="card-image-container">
                        {/* 2. استخدمنا الـ Optional Chaining (?.) لكل القيم */}
                        <img 
                            src={vehicle?.image_url} 
                            alt={isAr ? vehicle?.name_ar : vehicle?.name_en} 
                            className="vehicle-img" 
                        />
                        <span className="category-tag">
                            {isAr ? vehicle?.category_name_ar : vehicle?.category_name_en}
                        </span>
                        <button 
                            className={`favorite-btn ${isFavorite ? 'active' : ''}`} 
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <svg viewBox="0 0 24 24" fill={isFavorite ? "#e31b23" : "none"} stroke={isFavorite ? "#e31b23" : "white"}>
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>
        
                    <div className="card-info">
                        <div className="info-header">
                            <h3>{isAr ? vehicle?.name_ar : vehicle?.name_en}</h3>
                            <span className="arrow-icon">{isAr ? '←' : '→'}</span>
                        </div>
                        
                        <p className="year">{vehicle?.model_year || '2024'}</p>
                        
                        <p className="specs">
                            {isAr ? vehicle?.engine_ar : vehicle?.engine_en} • {isAr ? vehicle?.transmission_ar : vehicle?.transmission_en}
                        </p>
                        
                        {/* <hr className="divider" /> */}
        
                        <div className="price-container">
                            <span className="main-price">
                                {vehicle?.price_usd?.toLocaleString() || '0'}
                            </span>
                            <span className="installment">
                                {isAr ? 'تبدأ من' : 'from'} {vehicle?.monthly_installment}/{isAr ? 'شهر' : 'mo'}
                            </span>
                        </div>
                    </div>
                </div>
     
    );
};

export default VehicleCard;