import React from 'react';
import './intro.css';
import logo from '../assets/login/logo.svg';
import carback from '../assets/home/carback.png';
import { NavLink } from "react-router-dom"; 
import { useTranslation, Trans } from 'react-i18next';

const IntroScreen = () => {
  const { t } = useTranslation();
  return (

    <div className='home'>
      <div className="car-illustration">
        <img src={carback} alt="car background" className='car-img'/>
        <div className="tail-light-glow"></div>
      </div>

      <div className='all-components-2'>
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo-img"/>
        </div>

        <div className="text-section">
          <h1 className="title">
            <Trans
              i18nKey="intro.title"
              values={{ highlight: t('intro.highlight') }}
              components={{ 1: <span /> }}
            >
              PERFORMANCE MEETS <span>LUXURY</span>
            </Trans>
          </h1>
          <p className="subtitle">{t('intro.subtitle')}</p>
        </div>



        <NavLink to="/discover" className="explore-btn-2" >
        <button className="explore-btn">
            {t('intro.explore')}
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default IntroScreen;