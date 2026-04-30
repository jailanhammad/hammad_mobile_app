// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabase'; 
// import './header.css';
// import { NavLink } from "react-router-dom"; 
// import { useTranslation } from 'react-i18next';

// const Header = () => { 
//     const [headerData, setHeaderData] = useState(null);
    
//     const { i18n } = useTranslation();
//     const currentLang = i18n.language || 'en';
//     const isAr = currentLang === 'ar';

//     useEffect(() => {
//         const fetchHeader = async () => {
//             const { data, error } = await supabase
//                 .from('header_settings')
//                 .select('*')
//                 .single();
            
//             if (data) {
//                 setHeaderData(data);
//             } else if (error) {
//                 console.error("Error fetching header:", error.message);
//             }
//         };

//         fetchHeader();
//     }, []);

//     if (!headerData) return <div className="header-skeletor"></div>;

//     return ( 
//         <section className={`header ${isAr ? 'rtl-mode' : 'ltr-mode'}`} dir={isAr ? 'rtl' : 'ltr'}>
//             <div className='header-row'>
//                 <div className='welcome-div'>
//                     <NavLink to="/login" className="nav-item">
//                         <img src={headerData.user_avatar} alt="User Logo" className='logo' />
//                     </NavLink>
   
//                     <h1 className='welcome-text'>
//                         {isAr ? headerData.welcome_message_ar : headerData.welcome_message_en}, <br /> 
//                         <span className='jailan-text'>
//                             {isAr ? headerData.user_name_ar : headerData.user_name_en}
//                         </span>
//                     </h1>
//                 </div>

//                 <div className='notification-div'>
//                     <img src={headerData.notification_icon_url} alt="Bell" className='notification-icon' />
//                     {headerData.has_notifications && <span className="notify-dot"></span>}
//                 </div>
//             </div>

//             <div className='search-div'>
//                 <img src={headerData.search_icon_url} alt="Search Icon" className='search-icon' />
//                 <input 
//                     type="text" 
//                     className='search-input' 
//                     placeholder={isAr ? headerData.search_placeholder_ar : headerData.search_placeholder_en} 
//                 />
//             </div>
//         </section>
//     );
// }

// export default Header;


import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './header.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const Header = () => { 
    const [headerData, setHeaderData] = useState(null);
    const { i18n, t } = useTranslation(); // نستخدم t للترجمة الثابتة لو محتاجة
    
    // لضمان وجود لغة دائمًا حتى لو i18n لسه بيحمل
    const currentLang = i18n.language || 'en'; 

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const { data, error } = await supabase
                    .from('header_settings')
                    .select('*')
                    .maybeSingle();
                
                if (data) {
                    setHeaderData(data);
                }
            } catch (err) {
                console.error("Supabase Fetch Error:", err);
            }
        };
        fetchHeader();
    }, []);

    // بدلاً من إخفاء الهيدر تماماً، هنعرض "مساحة محجوزة" عشان الصفحة ما تتهزش
    if (!headerData) {
        return <div className="header-placeholder" style={{ height: '100px' }}></div>;
    }

    return ( 
        <section className={`header ${currentLang === 'ar' ? 'rtl-mode' : 'ltr-mode'}`}>
            <div className='header-row'>
                <div className='welcome-div'>
                    <NavLink to="/login" className="nav-item">
                        {/* تأكدي إن الرابط ده public في سوبابيس */}
                        <img src={headerData.user_avatar} alt="User" className='logo' />
                    </NavLink>
   
                    <h1 className='welcome-text'>
                        {currentLang === 'ar' ? headerData.welcome_message_ar : headerData.welcome_message_en}, <br /> 
                        <span className='jailan-text'>
                            {currentLang === 'ar' ? headerData.user_name_ar : headerData.user_name_en}
                        </span>
                    </h1>
                </div>

                <div className='notification-div'>
                    <img src={headerData.notification_icon_url} alt="Bell" className='notification-icon' />
                    {headerData.has_notifications && <span className="notify-dot"></span>}
                </div>
            </div>

            <div className='search-div'>
                <img src={headerData.search_icon_url} alt="Search" className='search-icon' />
                <input 
                    type="text" 
                    className='search-input' 
                    placeholder={currentLang === 'ar' ? headerData.search_placeholder_ar : headerData.search_placeholder_en} 
                />
            </div>
        </section>
    );
}

export default Header;