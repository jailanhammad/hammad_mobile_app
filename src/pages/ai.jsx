import React, { useState } from 'react';
import './ai.css';
import next from '../assets/home/next.svg';
import ai from '../assets/home/ai.svg';
import { NavLink } from "react-router-dom"; 

const AiOnboarding = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="onboarding-main-wrapper">
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
              <div className="star-icon-box">
              <img src={ai} alt="search-icon" />         
              </div>
            </div>

            <div className="ai-text-block">
              <h2 className="ai-main-heading">AI-Powered <br/> Recommendations</h2>
              <p className="ai-description-text">
              <span className='coming-soon-text'>COMING SOON </span> <br />  
              Get personalized car suggestions based on your lifestyle, budget, and preferences      </p>
            </div>

            <div className="custom-step-indicator">
              <div className="step-dot"></div>
              <div className="step-dot active-step"></div>
              <div className="step-dot"></div>
            </div>
          </div>

          <div className="footer-action-area">

          <NavLink to="/ar" className="next-btn-2">
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

export default AiOnboarding;