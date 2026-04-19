import React from 'react';
import './discover.css';
import search from '../assets/home/big-search.svg';
import next from '../assets/home/next.svg';
import { NavLink } from "react-router-dom"; 

const Discover = () => {
  return (


    <div className='onboarding-container'>
      <div className="top-nav-5">
        
      <NavLink to="/login" className="skip-decoration">
        <span className="skip-text">Skip</span>
      </NavLink>

      </div>

      <div className='main-content'>
        <div className="icon-wrapper-5">
          <div className="red-glow-bg"></div>
          <div className="search-box">
            <img src={search} alt="search-icon" />         
         </div>
        </div>

        <div className="text-content-5">
          <h2 className="discover-title">Discover Your <br/> Dream Car</h2>
          <p className="discover-subtitle">
          Browse through our extensive collection of premium vehicles from top brands worldwide          </p>
        </div>

        <div className="pagination-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="button-container-5">

      <NavLink to="/ai" className="next-btn-2">
        <button className="next-btn">
          Next 
          <span>
            <img src={next} alt="next-icon" />
          </span>
        </button>
        </NavLink>

      </div>
    </div>
  );
};

export default Discover;