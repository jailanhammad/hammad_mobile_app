import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { ChevronRight, Settings, Bell, Heart, LogOut, MessageCircle, Globe } from 'lucide-react';
import './settingspage.css';
import { NavLink } from "react-router-dom"; 


const SettingsPage = ({ userId }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('preferred_lang')
        .eq('id', userId)
        .single();
      if (data) setLang(data.preferred_lang);
    };
    fetchSettings();
  }, [userId]);

  const toggleLanguage = async (newLang) => {
    setLang(newLang);
    await supabase
      .from('profiles')
      .update({ preferred_lang: newLang })
      .eq('id', userId);
  };

  const t = {
    en: {
      title: 'Account Settings',
      edit: 'Edit Profile',
      notif: 'Notifications',
      pref: 'Preferences',
      lang: 'App Language',
      logout: 'Sign Out',
      contact: 'Contact Support'
    },
    ar: {
      title: 'إعدادات الحساب',
      edit: 'تعديل الملف الشخصي',
      notif: 'الإشعارات',
      pref: 'التفضيلات',
      lang: 'لغة التطبيق',
      logout: 'تسجيل الخروج',
      contact: 'تواصل مع الدعم'
    }
  };

  return (
    <div className={`settings-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="settings-title">{t[lang].title}</h2>

      <div className="settings-list">
        <div className="settings-item">
          <div className="item-left">
            <Settings className="icon-gold" size={20} />
            <span>{t[lang].edit}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>

        <div className="settings-item">
          <div className="item-left">
            <Bell className="icon-gold" size={20} />
            <span>{t[lang].notif}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>

        <div className="settings-item-expand">
          <div className="item-top">
            <div className="item-left">
              <Globe className="icon-gold" size={20} />
              <span>{t[lang].lang}</span>
            </div>
            <div className="lang-switches">
              <button 
                className={lang === 'en' ? 'active' : ''} 
                onClick={() => toggleLanguage('en')}
              >EN</button>
              <button 
                className={lang === 'ar' ? 'active' : ''} 
                onClick={() => toggleLanguage('ar')}
              >AR</button>
            </div>
          </div>
        </div>

        <div className="settings-item">
          <div className="item-left">
            <Heart className="icon-gold" size={20} />
            <span>{t[lang].pref}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>

        <div className="settings-item logout-item">
          <div className="item-left">
            <LogOut className="icon-red" size={20} />
            <span>{t[lang].logout}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>
      </div>

      <NavLink to="/contact" className="nav-item" end>
      <button className="contact-btn">
        {t[lang].contact}
      </button>
      </NavLink>


    </div>
  );
};

export default SettingsPage;