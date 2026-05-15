import React from 'react';
import './aboutus.css';
import { FaGlobe, FaGem, FaShieldAlt, FaTrophy } from 'react-icons/fa';
import Galaxy from '../components/galaxy';
import hero from '../assets/about/about-hero.svg';

const AboutUs = () => {
  return (
    <div className="detailing-page" >
      
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div >
        
        <section className="detailing-section">
        <img src={hero} alt="hero" />

          <div className="section-content">
            <h1 className="main-title-0"><span className='hammad'>Hammad </span><br />Motors</h1>
            <div className="line-divider"></div>
            <p className="description-0">
            Mahmoud Hammad is the founder and visionary leader of Hammad Motors. With over 28 years of experience in the automotive market, he built the company on trust, integrity, and long-term customer relationships.
            </p>
          </div>
        </section>

        
        <section className="detailing-section-mission">
          <span className="section-label">THE DRIVE</span>
          <div className="section-content">
             <h2 className="sub-title">Defining the <br />Standard</h2>
             <div className="vision-grid">
                <div className="vision-card">
                   <FaTrophy className="red-icon" />
                   <h3>The Mission</h3>
                   <p>To eliminate the friction of luxury car acquisition through transparency and elite white-glove service.</p>
                </div>
                <div className="vision-card">
                   <FaGem className="red-icon" />
                   <h3>The Vision</h3>
                   <p>To be the first name mentioned when a driver seeks a vehicle that defines their legacy.</p>
                </div>
             </div>
          </div>
        </section>

        <section className="detailing-section-experience">
          <div className="section-content">
            <h2 className="sub-title">Why Hammad <br />Motors?</h2>
            <p className="fade-text">The gold standard in automotive acquisition.</p>
            
            <div className="experience-grid">
              <div className="exp-item">
                <div className="exp-icon"><FaShieldAlt /></div>
                <div className="exp-text">
                  <h4>Trusted Car Dealership</h4>
                  <p>Building a global reputation for trust and excellence through years of automotive mastery.</p>
                </div>
              </div>
           
              <div className="exp-item">
                <div className="exp-icon"><FaGlobe /></div>
                <div className="exp-text">
                  <h4>Global Support</h4>
                  <p>With multiple branches, we deliver excellence everywhere.</p>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-icon"><FaGem /></div>
                <div className="exp-text">
                  <h4>Best Financing</h4>
                  <p>Exclusive financing rates and tailored packages to suit your lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;