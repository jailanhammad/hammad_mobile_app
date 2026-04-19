import React from 'react';
import './intro.css';
import logo from '../assets/login/logo.svg';
import carback from '../assets/home/carback.png';
import { NavLink } from "react-router-dom"; 

const IntroScreen = () => {
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
          <h1 className="title">PERFORMANCE MEETS <span>LUXURY</span></h1>
          <p className="subtitle">Find your perfect car and start your driving journey today.</p>
        </div>



        <NavLink to="/login" className="explore-btn-2" >
        <button className="explore-btn">
            Explore
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default IntroScreen;