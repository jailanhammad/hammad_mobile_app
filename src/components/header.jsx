import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './header.css';
import { NavLink } from "react-router-dom"; 


const Header = ({ lang = 'en' }) => {
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        const fetchHeader = async () => {
            const { data, error } = await supabase
                .from('header_settings')
                .select('*')
                .single();
            
            if (data) {
                setHeaderData(data);
            } else if (error) {
                console.error("Error fetching header:", error.message);
            }
        };

        fetchHeader();
    }, []);

    if (!headerData) return <div className="header-skeletor"></div>;

    const isAr = lang === 'ar';

    return ( 
        <section className={`header ${isAr ? 'rtl-mode' : 'ltr-mode'}`}>
            <div className='header-row'>
                <div className='welcome-div'>
                <NavLink to="/login" className="nav-item">
                    <img src={headerData.user_avatar} alt="User Logo" className='logo' />
                </NavLink>
   
                    <h1 className='welcome-text'>
                        {isAr ? headerData.welcome_message_ar : headerData.welcome_message_en}, <br /> 
                        <span className='jailan-text'>
                            {isAr ? headerData.user_name_ar : headerData.user_name_en}
                        </span>
                    </h1>
                </div>


                <div className='notification-div'>
                    <img src={headerData.notification_icon_url} alt="Bell" className='notification-icon' />
                    {headerData.has_notifications && <span className="notify-dot"></span>}
                </div>


            </div>

            <div className='search-div'>
                <img src={headerData.search_icon_url} alt="Search Icon" className='search-icon' />
                <input 
                    type="text" 
                    className='search-input' 
                    placeholder={isAr ? headerData.search_placeholder_ar : headerData.search_placeholder_en} 
                />
            </div>
        </section>
    );
}

export default Header;
