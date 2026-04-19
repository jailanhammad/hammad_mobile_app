import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './installmentpage.css';

const InstallmentPage = ({ lang = 'en' }) => {
    const [plans, setPlans] = useState([]);
    const [carPrice, setCarPrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  
    useEffect(() => {
      const fetchPlans = async () => {
        const { data, error } = await supabase.from('hammad_installment_plans').select('*');
        if (!error) {
          setPlans(data);
          setSelectedPlan(data[0]);
        }
      };
      fetchPlans();
    }, []);
  
    const calculateInstallment = () => {
      if (!carPrice || !selectedPlan) return;
      const principal = carPrice - (downPayment || 0);
      const totalWithInterest = principal * (1 + parseFloat(selectedPlan.interest_rate));
      const monthly = totalWithInterest / selectedPlan.duration_months;
      setMonthlyInstallment(monthly.toFixed(0)); 
    };
  
    return (
      <div className={`inst-page-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
        <header className="inst-header">
          <h2 className="inst-main-title">Installment Calculator</h2>
          <p className="inst-subtitle">Calculate your monthly payments easily</p>
        </header>
        
        <div className="inst-form-container">
          <div className="inst-input-box">
            <label>Car Price (EGP)</label>
            <input 
              type="number" 
              value={carPrice} 
              onChange={(e) => setCarPrice(e.target.value)} 
              placeholder="e.g. 500,000"
            />
          </div>
  
          <div className="inst-input-box">
            <label>Down Payment</label>
            <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(e.target.value)} 
                placeholder="e.g. 100,000"
                className="no-spinner"
            />
            </div>
  
          <div className="inst-plans-section">
            <label>Select Your Plan</label>
            <div className="inst-grid">
              {plans.map(plan => (
                <div 
                  key={plan.id}
                  className={`inst-plan-card ${selectedPlan?.id === plan.id ? 'active' : ''}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="plan-radio"></div>
                  <div className="plan-info">
                    <span className="p-name">{plan.plan_name_en}</span>
                    <span className="p-time">{plan.duration_months} Months</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <button className="inst-calculate-btn" onClick={calculateInstallment}>
            Calculate Now
          </button>
  
          {monthlyInstallment > 0 && (
            <div className="inst-result-display">
              <span className="res-label">Estimated Monthly Payment</span>
              <div className="res-value-wrap">
                <h3 className="res-amount">{Number(monthlyInstallment).toLocaleString()}</h3>
                <span className="res-currency">EGP/Month</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default InstallmentPage;