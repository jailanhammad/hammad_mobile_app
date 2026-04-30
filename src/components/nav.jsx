import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './nav.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

import homeIcon from '../assets/home/home.svg';
import searchIcon from '../assets/home/search-2.svg';
import carIcon from '../assets/home/car.svg';
import profileIcon from '../assets/home/profile.svg';
import menuIcon from '../assets/home/menu.svg';

const Nav = () => { 
    const [navLabels, setNavLabels] = useState(null);
    
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

    useEffect(() => {
        const fetchNav = async () => {
            const { data } = await supabase
                .from('nav_settings_2')
                .select('*')
                .single();
            if (data) setNavLabels(data);
        };
        fetchNav();
    }, []);

    if (!navLabels) return null;

    return (
        <nav className={`nav-bar ${isAr ? 'rtl-nav' : 'ltr-nav'}`} dir={isAr ? 'rtl' : 'ltr'}>
            
            <NavLink to="/home" className="nav-item" end>
                <span className="nav-icon"><img src={homeIcon} alt="home" /></span>
                <span className="nav-label">{isAr ? navLabels.home_ar : navLabels.home_en}</span>
            </NavLink>
            
            <NavLink to="/explore" className="nav-item">
                <span className="nav-icon"><img src={searchIcon} alt="explore" /></span>
                <span className="nav-label">{isAr ? navLabels.explore_ar : navLabels.explore_en}</span>
            </NavLink>
            
            <NavLink to="/vehicles" className="nav-item">
                <span className="nav-icon"><img src={carIcon} alt="vehicles" /></span>
                <span className="nav-label">{isAr ? navLabels.vehicles_ar : navLabels.vehicles_en}</span>
            </NavLink>

            <NavLink to="/profile" className="nav-item">
                <span className="nav-icon"><img src={profileIcon} alt="profile" /></span>
                <span className="nav-label">{isAr ? navLabels.profile_ar : navLabels.profile_en}</span>
            </NavLink>
            
            <NavLink to="/Menu" className="nav-item">
                <span className="nav-icon"><img src={menuIcon} alt="menu" /></span>
                <span className="nav-label">{isAr ? navLabels.menu_ar : navLabels.menu_en}</span>
            </NavLink>
            
        </nav>
    );
}

export default Nav;