import React, { useState } from 'react';
import { Camera, Rotate3d, Box, Maximize, Palette, Eye } from 'lucide-react';
import './arpage.css';
import { NavLink } from "react-router-dom"; 
import { useTranslation } from 'react-i18next';

const ArPage = () => { 
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const [selectedColor, setSelectedColor] = useState({ 
    name: isAr ? 'أحمر' : 'Red', 
    hex: '#D32F2F' 
  });

  const colors = [
    { name: isAr ? 'أسود' : 'Black', hex: '#000000' },
    { name: isAr ? 'أبيض' : 'White', hex: '#FFFFFF' },
    { name: isAr ? 'أحمر' : 'Red', hex: '#D32F2F' },
    { name: isAr ? 'أزرق' : 'Blue', hex: '#1976D2' }
  ];

  const features = [
    { icon: <Rotate3d size={18}/>, text: isAr ? 'عرض خارجي 360°' : '360° Exterior View' },
    { icon: <Box size={18}/>, text: isAr ? 'جولة داخلية تفاعلية' : 'Interactive Interior Tour' },
    { icon: <Palette size={18}/>, text: isAr ? 'معاينة الألوان فوراً' : 'Real-time Color Preview' },
    { icon: <Maximize size={18}/>, text: isAr ? 'تراكب المواصفات' : 'Specification Overlay' },
    { icon: <Eye size={18}/>, text: isAr ? 'تصوير الأبعاد' : 'Dimension Visualization' }
  ];

  return (
    <div className={`ar-wrapper ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="ar-header">
        <div className="ar-icon-badge">
          <Camera size={24} color="#fff" />
        </div>
        <h1>{isAr ? 'معاينة الواقع المعزز' : 'AR Car Preview'}</h1>
        <p>{isAr ? 'شاهد سيارة أحلامك في مكانك' : 'See your dream car in your space'}</p>
      </div>

      <div className="ar-viewport">
        <div className="corner-tl"></div><div className="corner-tr"></div>
        <div className="corner-bl"></div><div className="corner-br"></div>
        <div className="viewport-content">
          <Camera size={48} color="#444" />
          <span>{isAr ? 'ضع السيارة في مساحتك' : 'Place vehicle in your space'}</span>
        </div>
      </div>

      <NavLink 
        to="/choose-car" 
        state={{ color: selectedColor.hex }} 
        style={{ textDecoration: 'none' }}
      >
        <button className="start-ar-btn" >
          <Camera size={20} />
          {isAr ? 'ابدأ تجربة الـ AR' : 'Start AR Experience'}
        </button>
      </NavLink>

      <section className="ar-section">
        <div className="section-head">
          <Palette size={18} className="gold-text" />
          <h3>{isAr ? 'تخصيص الألوان' : 'Color Customization'}</h3>
        </div>
        <div className="color-grid">
          {colors.map((c) => (
            <div 
              className="color-item" 
              key={c.name} 
              onClick={() => setSelectedColor(c)}
            >
              <div 
                className={`color-circle ${selectedColor.name === c.name ? 'active' : ''}`} 
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
          <h3>{isAr ? 'المعاينة الداخلية' : 'Interior Preview'}</h3>
        </div>
        <div className="interior-btns">
          {[
            {en: 'Dashboard', ar: 'تابلوه'},
            {en: 'Seats', ar: 'كراسي'},
            {en: 'Steering', ar: 'عجلة القيادة'},
            {en: 'Console', ar: 'الكونسول'}
          ].map(item => (
            <button key={item.en} className="glass-btn">{isAr ? item.ar : item.en}</button>
          ))}
        </div>
      </section>

      <section className="ar-section">
        <h3>{isAr ? 'أهم المميزات' : 'Feature Highlights'}</h3>
        <div className="features-list">
          {features.map((f, i) => (
            <div className="feature-row" key={i}>
              <div className="feature-dot">{f.icon}</div>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      <button className="save-preview-btn">
        {isAr ? 'حفظ المعاينة' : 'Save AR Preview'}
      </button>
    </div>
  );
};

export default ArPage;