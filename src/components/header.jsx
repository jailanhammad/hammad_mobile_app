import React from 'react';
import './header.css';
import { FaRegBell, FaSearch } from 'react-icons/fa'; 
import smallogo from '../assets/home/small-logo.svg';

const Header = ({ userName = "User" }) => {
  return (

    <>
    
    <header className="hm-header">
      <div className="header-top">
        <div className="brand-section">
            <img src={smallogo} alt="" />          
          <div className="welcome-text">
            <span>Welcome back,</span>
            <h1>{userName}</h1>
          </div>
        </div>
        
        <div className="notification-wrapper">
          <button className="notification-btn" aria-label="Notifications">
            <FaRegBell />
            <span className="notification-dot"></span>
          </button>
        </div>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search cars, brands..." 
          className="search-input"
        />
      </div>
    </header>

    </>

  );
};

export default Header;