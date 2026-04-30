import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import VehicleCard from './vehiclecard'; 
import './profilepage.css';
import like from '../assets/home/love.svg';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    const userData = {
        name: "Jailan Hammad",
        email: "jailanhammad@gmail.com",
        initials: "JH",
        stats: [
          { label: isAr ? "المحفوظة" : "Saved Cars", value: favorites.length },
          { label: isAr ? "طلبات القيادة" : "Test Drives", value: 3 },
          { label: isAr ? "التقييمات" : "Reviews", value: 5 }
        ]
    };

    useEffect(() => {
        const fetchFavorites = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('vehicles_data_2') 
                    .select('*')
                    .eq('is_favorite', true);

                if (!error && data) {
                    setFavorites(data);
                }
            } catch (err) {
                console.error("Error fetching:", err);
            }
            setLoading(false);
        };
        fetchFavorites();
    }, []);

    const handleFavoriteToggle = (id, newState) => {
        if (newState === false) {
            setFavorites(prev => prev.filter(item => item.id !== id));
        }
    };

    return (
        <>
            <div className="profile-container" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="account-summary-card">
                    <div className="identity-section">
                        <div className="identity-section__avatar">{userData.initials}</div>
                        <div className="identity-section__info">
                            <h2 className="identity-section__name">{userData.name}</h2>
                            <p className="identity-section__email">{userData.email}</p>
                        </div>
                    </div>
                    <div className="activity-metrics">
                        {userData.stats.map((stat, index) => (
                            <div key={index} className="activity-metrics__item">
                                <span className="activity-metrics__value">{stat.value}</span>
                                <span className="activity-metrics__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`profile-container-2 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
                <div className="saved-cars-header">
                    <div className="header-left">
                        <span className="heart-icon">
                            <img src={like} alt="like-icon" />
                        </span>
                        <h2>{isAr ? 'العربيات المحفوظة' : 'Saved Cars'}</h2>
                    </div>
                    <button className="view-all-btn">
                        {isAr ? 'عرض الكل' : 'View All'} <span className="arrow-flip">{isAr ? '‹' : '›'}</span>
                    </button>
                </div>

                <div className="favorites-list">
                    {loading ? (
                        <p className="status-text">{isAr ? 'جاري التحميل...' : 'Loading...'}</p>
                    ) : favorites.length > 0 ? (
                        favorites.map(vehicle => (
                            <VehicleCard 
                                key={vehicle.id} 
                                vehicle={vehicle} 
                                lang={currentLang} 
                                onToggle={handleFavoriteToggle}
                            />
                        ))
                    ) : (
                        <p className="status-text">{isAr ? 'لا توجد مفضلات حالياً' : 'No favorites yet'}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;