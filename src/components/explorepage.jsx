import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase'; 
import './explorepage.css';
import { NavLink } from "react-router-dom"; 


const ExplorePage = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [language, setLanguage] = useState('en'); 

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

    if (loading) return <div className="loading">Loading Brands...</div>;

    return (
        <div className="explore-container">
            <header className="explore-header">
                <span className="subtitle">{language === 'en' ? 'Top Manufacturers' : 'أفضل المصنعين'}</span>
                <h1>{language === 'en' ? 'Browse by' : 'تصفح حسب'} <span>Brand</span></h1>
            </header>

            <NavLink to="/vehicles" className="brand-navlink" end>

            <div className="brands-grid">
                {brands.map(brand => (
                    <div key={brand.id} className="brand-card">
                        <div className="logo-wrapper">
                            <img src={brand.logo_url} alt={brand.name_en} />
                        </div>
                        <div className="brand-info">
                            <h3>{language === 'en' ? brand.name_en : brand.name_ar}</h3>
                            <span>{brand.vehicle_count} {language === 'en' ? 'vehicles' : 'سيارة'}</span>
                        </div>
                    </div>
                ))}
            </div>

            </NavLink>

        </div>
    );
};

export default ExplorePage;