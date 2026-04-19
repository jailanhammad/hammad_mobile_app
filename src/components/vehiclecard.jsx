import React, { useState, useEffect } from 'react';
import './vehiclecard.css';
import { supabase } from '../supabase';

// لازم تضيفي onToggle هنا بين الأقواس
const VehicleCard = ({ vehicle, lang = 'en', onToggle }) => {
    
    const isAr = lang === 'ar';
    
    // التعديل هنا: نربط الـ State مباشرة بالـ vehicle اللي جاي من السوبابيز
    const [isFavorite, setIsFavorite] = useState(vehicle?.is_favorite);

    // دي عشان لو الـ props اتغيرت الـ State تتحدث
    useEffect(() => {
        setIsFavorite(vehicle?.is_favorite);
    }, [vehicle?.is_favorite]);

    const toggleFavorite = async (e) => {
        if (e) e.preventDefault();
        
        const newState = !isFavorite;
        setIsFavorite(newState);
    
        // 1. تنظيف الـ ID من أي مسافات
        const cleanId = vehicle.id.trim();
    
        try {
            const { data, error } = await supabase
                .from('vehicles_data_2') // اسم الجدول الحقيقي من ملف الـ SQL بتاعك
                .update({ is_favorite: newState })
                .eq('id', cleanId) 
                .select();
    
            if (error) {
                // لو فشل بالـ ID، هنجرب نحدث بالاسم عشان نضمن إنها تشتغل
                console.log("Retrying with Name...");
                await supabase
                    .from('vehicles_data_2')
                    .update({ is_favorite: newState })
                    .eq('name_en', vehicle.name_en);
            }
            
            if (onToggle) onToggle(vehicle.id, newState);
            console.log("Done!");
    
        } catch (err) {
            setIsFavorite(!newState);
        }
    };    
    
    return (
        <div className={`vehicle-card ${isAr ? 'rtl' : 'ltr'}`}>
            <div className="card-image-container">
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
                    onClick={toggleFavorite}
                    type="button" 
                >
                    <svg viewBox="0 0 24 24" fill={isFavorite ? "#e31b23" : "none"} stroke={isFavorite ? "#e31b23" : "white"}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            <div className="card-info">
                <div className="info-header">
                    <h3>{isAr ? vehicle?.name_ar : vehicle?.name_en}</h3>
                </div>
                <p className="year">{isAr ? vehicle?.transmission_ar : vehicle?.transmission_en}</p>
                <p className="specs">
                    {isAr ? vehicle?.engine_ar : vehicle?.engine_en} • {isAr ? vehicle?.category_ar : vehicle?.category_en}
                </p>
                <div className="price-container">
                    <span className="main-price">
                        {vehicle?.price_usd?.toLocaleString() || '0'}
                    </span>
                    <span className="arrow-icon">{isAr ? '←' : '→'}</span>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;