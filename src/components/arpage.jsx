import React, { useState } from 'react';
import { Camera, Rotate3d, Box, Maximize, Palette, Eye } from 'lucide-react';
import './arpage.css';

const ArPage = ({ lang = 'en' }) => {
  const [selectedColor, setSelectedColor] = useState('Red');

  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#D32F2F' },
    { name: 'Blue', hex: '#1976D2' }
  ];

  const features = [
    { icon: <Rotate3d size={18}/>, text: '360° Exterior View' },
    { icon: <Box size={18}/>, text: 'Interactive Interior Tour' },
    { icon: <Palette size={18}/>, text: 'Real-time Color Preview' },
    { icon: <Maximize size={18}/>, text: 'Specification Overlay' },
    { icon: <Eye size={18}/>, text: 'Dimension Visualization' }
  ];

  return (
    <div className={`ar-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="ar-header">
        <div className="ar-icon-badge">
          <Camera size={24} color="#fff" />
        </div>
        <h1>AR Car Preview</h1>
        <p>See your dream car in your space</p>
      </div>

      <div className="ar-viewport">
        <div className="corner-tl"></div><div className="corner-tr"></div>
        <div className="corner-bl"></div><div className="corner-br"></div>
        <div className="viewport-content">
          <Camera size={48} color="#444" />
          <span>Place vehicle in your space</span>
        </div>
      </div>

      <button className="start-ar-btn">
        <Camera size={20} />
        Start AR Experience
      </button>

      <section className="ar-section">
        <div className="section-head">
          <Palette size={18} className="gold-text" />
          <h3>Color Customization</h3>
        </div>
        <div className="color-grid">
          {colors.map((c) => (
            <div className="color-item" key={c.name} onClick={() => setSelectedColor(c.name)}>
              <div 
                className={`color-circle ${selectedColor === c.name ? 'active' : ''}`} 
                style={{ backgroundColor: c.hex }}
              ></div>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ar-section">
        <div className="section-head">
          <Eye size={18} className="red-text" />
          <h3>Interior Preview</h3>
        </div>
        <div className="interior-btns">
          {['Dashboard', 'Seats', 'Steering', 'Console'].map(item => (
            <button key={item} className="glass-btn">{item}</button>
          ))}
        </div>
      </section>

      <section className="ar-section">
        <h3>Feature Highlights</h3>
        <div className="features-list">
          {features.map((f, i) => (
            <div className="feature-row" key={i}>
              <div className="feature-dot">{f.icon}</div>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <button className="save-preview-btn">Save AR Preview</button>
    </div>
  );
};

export default ArPage;