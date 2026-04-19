
import React, { useState } from 'react';
import { supabase } from '../supabase';
import './sellcar.css'; 



const SellCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from('hammad_car_listing')
      .insert([formData]);

    if (error) {
      alert("حدث خطأ في قاعدة البيانات: " + error.message);
      return;
    }

    const phoneNumber = "201000444401"; 
    const message = `طلب بيع جديد (Hammad Motors):
- الماركة: ${formData.make}
- الموديل: ${formData.model}
- السنة: ${formData.year}
- الكيلومترات: ${formData.mileage}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const sellingSteps = [
    { number: 1, title: 'Vehicle Information', description: 'Tell us about your car' },
    { number: 2, title: 'Upload Photos', description: 'Share clear images' },
    { number: 3, title: 'Get Your Offer', description: 'Receive instant quote' },
  ];

  return (
    <div className="sell-car-container">
      <div className="sell-car-header-card">
        <h2 className="sell-car-main-title">Sell Your Car Today</h2>
        <p className="sell-car-header-subtitle">
          Get a fair market value for your vehicle in 3 easy steps
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
        <h3 className="form-heading">Car Information</h3>
        <form onSubmit={handleConfirm} className="sell-actual-form">
          <div className="sell-input-group">
            <label>Make</label>
            <input name="make" placeholder="Enter make" onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>Model</label>
            <input name="model" placeholder="Enter model" onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>Year</label>
            <input name="year" placeholder="Enter year" onChange={handleChange} required />
          </div>
          <div className="sell-input-group">
            <label>Mileage</label>
            <input name="mileage" placeholder="Enter mileage" onChange={handleChange} required />
          </div>
          <button type="submit" className="sell-confirm-btn">
            Confirm <span>&rsaquo;</span>
          </button>
        </form>
      </div>

   
    </div>
  );
};

export default SellCar;