import React, { useState } from 'react';
import { supabase } from '../supabase';
import './sellcar.css'; 
import { useTranslation } from 'react-i18next';

const SellCar = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sellingSteps = [
    { 
      number: 1, 
      title: isAr ? 'بيانات السيارة' : 'Vehicle Information', 
      description: isAr ? 'قولنا تفاصيل عربيتك' : 'Tell us about your car' 
    },
    { 
      number: 2, 
      title: isAr ? 'ارفع الصور' : 'Upload Photos', 
      description: isAr ? 'صور واضحة لكل الزوايا' : 'Share clear images' 
    },
    { 
      number: 3, 
      title: isAr ? 'استلم عرضنا' : 'Get Your Offer', 
      description: isAr ? 'هنوصلك بأفضل سعر' : 'Receive instant quote' 
    },
  ];

  const handleConfirm = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('hammad_car_listing').insert([formData]);

    if (error) {
      alert(isAr ? "حدث خطأ: " + error.message : "Error: " + error.message);
      return;
    }

    const message = isAr 
      ? `طلب بيع جديد:\n- الماركة: ${formData.make}\n- الموديل: ${formData.model}`
      : `New Sell Request:\n- Make: ${formData.make}\n- Model: ${formData.model}`;

    window.open(`https://api.whatsapp.com/send?phone=201000444401&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`sell-car-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="sell-car-header-card">
        <h2 className="sell-car-main-title">
          {isAr ? 'بيع عربيتك النهاردة' : 'Sell Your Car Today'}
        </h2>
        <p className="sell-car-header-subtitle">
          {isAr ? 'احصل على أفضل سعر في 3 خطوات' : 'Get a fair market value in 3 easy steps'}
        </p>
      </div>

      <div className="sell-car-steps-list">
        {sellingSteps.map((step) => (
          <div key={step.number} className="sell-car-step-item">
            <div className="sell-car-step-number-container">
              <div className="sell-car-step-number-circle">{step.number}</div>
            </div>
            <div className="sell-car-step-text-content">
              <h3 className="sell-car-step-title">{step.title}</h3>
              <p className="sell-car-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="car-info-form-card">
        <h3 className="form-heading">{isAr ? 'بيانات السيارة' : 'Car Information'}</h3>
        <form onSubmit={handleConfirm} className="sell-actual-form">
          <div className="sell-input-group">
            <label>{isAr ? 'الماركة' : 'Make'}</label>
            <input name="make" placeholder={isAr ? "أدخل الماركة" : "Enter make"} onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>{isAr ? 'الموديل' : 'Model'}</label>
            <input name="model" placeholder={isAr ? "أدخل الموديل" : "Enter model"} onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>{isAr ? 'السنة' : 'Year'}</label>
            <input name="year" placeholder={isAr ? "أدخل السنة" : "Enter year"} onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>{isAr ? 'الكيلومترات' : 'Mileage'}</label>
            <input name="mileage" placeholder={isAr ? "أدخل الكيلومترات" : "Enter mileage"} onChange={handleChange} required />
          </div>
          <button type="submit" className="sell-confirm-btn">
            {isAr ? 'تأكيد' : 'Confirm'} <span>{isAr ? '‹' : '›'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCar;