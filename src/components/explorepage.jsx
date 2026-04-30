import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase'; 
import './explorepage.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const ExplorePage = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

    useEffect(() => {
        const translations = {
            en: {
                explorePage: {
                    subtitle: "Top Manufacturers",
                    title: "Browse by",
                    brand: "Brand",
                    vehicles: "vehicles",
                    loading: "Loading Brands..."
                }
            },
            ar: {
                explorePage: {
                    subtitle: "أفضل المصنعين",
                    title: "تصفح حسب",
                    brand: "الماركة",
                    vehicles: "سيارة",
                    loading: "جاري التحميل..."
                }
            }
        };

        Object.keys(translations).forEach((l) => {
            i18n.addResourceBundle(l, 'translation', translations[l], true, true);
        });
    }, [i18n]);

    useEffect(() => {
        fetchBrands();
    }, []);

    async function fetchBrands() {
        const { data, error } = await supabase
            .from('app_brands')
            .select('*');
        
        if (error) console.error('Error fetching brands:', error);
        else setBrands(data);
        setLoading(false);
    }

    if (loading) return <div className="loading">{t('explorePage.loading')}</div>;

    return (
        <div className={`explore-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <header className="explore-header">
                <span className="subtitle">{t('explorePage.subtitle')}</span>
                <h1>
                    {t('explorePage.title')} <span>{t('explorePage.brand')}</span>
                </h1>
            </header>

            <NavLink to="/vehicles" className="brand-navlink" end>
                <div className="brands-grid">
                    {brands.map(brand => (
                        <div key={brand.id} className="brand-card">
                            <div className="logo-wrapper">
                                <img src={brand.logo_url} alt={isAr ? brand.name_ar : brand.name_en} />
                            </div>
                            <div className="brand-info">
                                <h3>{isAr ? brand.name_ar : brand.name_en}</h3>
                                <span>{brand.vehicle_count} {t('explorePage.vehicles')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </NavLink>
        </div>
    );
};

export default ExplorePage;