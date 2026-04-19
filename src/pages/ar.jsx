import React, { useState } from 'react';
import './ar.css';
import next from '../assets/home/next.svg';
import ar from '../assets/home/ar.svg';
import { NavLink } from "react-router-dom"; 

const ArOnboarding = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="onboarding-main-wrapper-3">
      {currentPage === 2 && (
        <div className="unique-ai-section">
          <div className="top-utility-bar">
          <NavLink to="/login" className="skip-decoration">
            <span className="skip-text">Skip</span>
          </NavLink>
          </div>

          <div className="ai-content-core">
            <div className="magic-icon-container">
              <div className="blue-aura-glow"></div>
              <div className="star-icon-box-3">
              <img src={ar} alt="search-icon" />         
              </div>
            </div>

            <div className="ai-text-block">
              <h2 className="ai-main-heading">AR Preview <br /> Experience</h2>
              <p className="ai-description-text">
              Visualize your next car in your space with our cutting-edge augmented reality technology      </p>
            </div>

            <div className="custom-step-indicator">
              <div className="step-dot"></div>
              <div className="step-dot"></div>
              <div className="step-dot active-step"></div>
            </div>
          </div>

          <div className="footer-action-area">
          <NavLink to="/login" className="next-btn-2">
            <button className="gradient-next-trigger" onClick={() => setCurrentPage(3)}>
              Next   
                <span>
                    <img src={next} alt="next-icon" />
                </span>
            </button>
          </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArOnboarding;