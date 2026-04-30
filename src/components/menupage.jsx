import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase'; 
import './menupage.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuPage = () => {
    const navigate = useNavigate(); 
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const { data, error } = await supabase
                    .from('app_menu_items')
                    .select('*')
                    .order('sort_order', { ascending: true });

                if (error) throw error;
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <div className="loading-text">{isAr ? 'جاري التحميل...' : 'Loading...'}</div>;

    const handleNavigation = (slug) => {
        navigate(`/${slug}`); 
    };

    return (
        <div className={`menu-page-container ${isAr ? 'dir-rtl' : 'dir-ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <h2 className="menu-title">{isAr ? 'القائمة' : 'Menu'}</h2>
            
            <div className="menu-items-border-box">
                <div className="scrollable-content">
                    {menuItems.map((item) => (
                        <button 
                            key={item.id} 
                            className="menu-custom-btn"
                            onClick={() => handleNavigation(item.slug)}
                        >
                            {isAr ? item.name_ar : item.name_en}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;