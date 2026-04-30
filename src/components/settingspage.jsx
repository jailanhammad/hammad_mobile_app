import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { ChevronRight, Settings, Bell, Heart, LogOut, Globe } from 'lucide-react';
import './settingspage.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';


const SettingsPage = ({ userId }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
  const [lang, setLang] = useState(currentLang);



  useEffect(() => {
    const translations = {
      en: {
        settings: {
          title: "Account Settings",
          editProfile: "Profile",
          notifications: "Notifications",
          appLanguage: "Language",
          preferences: "Preferences",
          signOut: "Sign Out",
          contactSupport: "Contact Support"
        }
      },
      ar: {
        settings: {
          title: "إعدادات الحساب",
          editProfile: " الملف الشخصي",
          notifications: "الإشعارات",
          appLanguage: "اللغة",
          preferences: "التفضيلات",
          signOut: "تسجيل الخروج",
          contactSupport: "تواصل مع الدعم"
        }
      }
    };

    Object.keys(translations).forEach((l) => {
      i18n.addResourceBundle(l, 'translation', translations[l], true, true);
    });

    i18n.changeLanguage(i18n.language);
  }, [i18n]);


  useEffect(() => {
    setLang(i18n.resolvedLanguage || i18n.language || 'en');
  }, [i18n.resolvedLanguage, i18n.language]);

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('preferred_lang')
        .eq('id', userId)
        .single();
      if (data?.preferred_lang) {
        setLang(data.preferred_lang);
        if (i18n.language !== data.preferred_lang) {
          i18n.changeLanguage(data.preferred_lang);
        }
      }
    };
    fetchSettings();
  }, [userId, i18n]);

  const toggleLanguage = async (newLang) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    await supabase
      .from('profiles')
      .update({ preferred_lang: newLang })
      .eq('id', userId);
  };

  return (
    <>
    
    <div className={`settings-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="settings-title">{t('settings.title')}</h2>

      <div className="settings-list">

       <NavLink to="/profile" className="underline" end>
        <div className="settings-item">
          <div className="item-left">
            <Settings className="icon-gold" size={20} />
            <span>{t('settings.editProfile')}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>
        </NavLink>

        <NavLink to="/home" className="underline" end>
        <div className="settings-item">
          <div className="item-left">
            <Bell className="icon-gold" size={20} />
            <span>{t('settings.notifications')}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>
        </NavLink>

        <div className="settings-item-expand">
          <div className="item-top">
            <div className="item-left">
              <Globe className="icon-gold" size={20} />
              <span>{t('settings.appLanguage')}</span>
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

        <NavLink to="/vehicles" className="underline" end>
        <div className="settings-item">
          <div className="item-left">
            <Heart className="icon-gold" size={20} />
            <span>{t('settings.preferences')}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>
        </NavLink>

        <NavLink to="/login" className="underline" end>
        <div className="settings-item logout-item">
          <div className="item-left">
            <LogOut className="icon-red" size={20} />
            <span>{t('settings.signOut')}</span>
          </div>
          <ChevronRight size={20} className="chevron" />
        </div>
        </NavLink>

      </div>


      <NavLink to="/contact" className="nav-item" end>
      <button className="contact-btn">
        {t('settings.contactSupport')}
      </button>
      </NavLink>


    </div>

    </>

  );
};

export default SettingsPage;