import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase'; 
import './menupage.css';

const MenuPage = ({ lang = 'en' }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const isAr = lang === 'ar';

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

    if (loading) return <div className="loading-text">Loading...</div>;

    return (
        <div className={`menu-page-container ${isAr ? 'dir-rtl' : 'dir-ltr'}`}>
            <h2 className="menu-title">{isAr ? 'القائمة' : 'Menu'}</h2>
            
            <div className="menu-items-border-box"> 
    <div className="scrollable-content"> 
        {menuItems.map((item) => (
            <button key={item.id} className="menu-custom-btn">
                {isAr ? item.name_ar : item.name_en}
            </button>
        ))}
    </div>
</div>
        </div>
    );
};

export default MenuPage;