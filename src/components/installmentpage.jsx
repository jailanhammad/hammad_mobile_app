// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabase';
// import './installmentpage.css';

// const InstallmentPage = ({ lang = 'en' }) => {
//     const [plans, setPlans] = useState([]);
//     const [carPrice, setCarPrice] = useState('');
//     const [downPayment, setDownPayment] = useState('');
//     const [selectedPlan, setSelectedPlan] = useState(null);
//     const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  
//     useEffect(() => {
//       const fetchPlans = async () => {
//         const { data, error } = await supabase.from('hammad_installment_plans').select('*');
//         if (!error) {
//           setPlans(data);
//           setSelectedPlan(data[0]);
//         }
//       };
//       fetchPlans();
//     }, []);
  
//     const calculateInstallment = () => {
//       if (!carPrice || !selectedPlan) return;
//       const principal = carPrice - (downPayment || 0);
//       const totalWithInterest = principal * (1 + parseFloat(selectedPlan.interest_rate));
//       const monthly = totalWithInterest / selectedPlan.duration_months;
//       setMonthlyInstallment(monthly.toFixed(0)); 
//     };
  
//     return (
//       <div className={`inst-page-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
//         <header className="inst-header">
//           <h2 className="inst-main-title">Installment Calculator</h2>
//           <p className="inst-subtitle">Calculate your monthly payments easily</p>
//         </header>
        
//         <div className="inst-form-container">
//           <div className="inst-input-box">
//             <label>Car Price (EGP)</label>
//             <input 
//               type="number" 
//               value={carPrice} 
//               onChange={(e) => setCarPrice(e.target.value)} 
//               placeholder="e.g. 500,000"
//             />
//           </div>
  
//           <div className="inst-input-box">
//             <label>Down Payment</label>
//             <input 
//                 type="number" 
//                 value={downPayment} 
//                 onChange={(e) => setDownPayment(e.target.value)} 
//                 placeholder="e.g. 100,000"
//                 className="no-spinner"
//             />
//             </div>
  
//           <div className="inst-plans-section">
//             <label>Select Your Plan</label>
//             <div className="inst-grid">
//               {plans.map(plan => (
//                 <div 
//                   key={plan.id}
//                   className={`inst-plan-card ${selectedPlan?.id === plan.id ? 'active' : ''}`}
//                   onClick={() => setSelectedPlan(plan)}
//                 >
//                   <div className="plan-radio"></div>
//                   <div className="plan-info">
//                     <span className="p-name">{plan.plan_name_en}</span>
//                     <span className="p-time">{plan.duration_months} Months</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//           <button className="inst-calculate-btn" onClick={calculateInstallment}>
//             Calculate Now
//           </button>
  
//           {monthlyInstallment > 0 && (
//             <div className="inst-result-display">
//               <span className="res-label">Estimated Monthly Payment</span>
//               <div className="res-value-wrap">
//                 <h3 className="res-amount">{Number(monthlyInstallment).toLocaleString()}</h3>
//                 <span className="res-currency">EGP/Month</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default InstallmentPage;

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './installmentpage.css';
// 1. استدعاء نظام الترجمة
import { useTranslation } from 'react-i18next';

const InstallmentPage = () => {
    const [plans, setPlans] = useState([]);
    const [carPrice, setCarPrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [monthlyInstallment, setMonthlyInstallment] = useState(0);

    // 2. تفعيل i18n
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';
  
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
      <div className={`inst-page-wrapper ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
        <header className="inst-header">
          <h2 className="inst-main-title">
            {isAr ? 'حاسبة الأقساط' : 'Installment Calculator'}
          </h2>
          <p className="inst-subtitle">
            {isAr ? 'احسب أقساطك الشهرية بكل سهولة' : 'Calculate your monthly payments easily'}
          </p>
        </header>
        
        <div className="inst-form-container">
          <div className="inst-input-box">
            <label>{isAr ? 'سعر السيارة (جنية)' : 'Car Price (EGP)'}</label>
            <input 
              type="number" 
              value={carPrice} 
              onChange={(e) => setCarPrice(e.target.value)} 
              placeholder={isAr ? "مثال: 500,000" : "e.g. 500,000"}
            />
          </div>
  
          <div className="inst-input-box">
            <label>{isAr ? 'المقدم' : 'Down Payment'}</label>
            <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(e.target.value)} 
                placeholder={isAr ? "مثال: 100,000" : "e.g. 100,000"}
                className="no-spinner"
            />
            </div>
  
          <div className="inst-plans-section">
            <label>{isAr ? 'اختر نظام التقسيط' : 'Select Your Plan'}</label>
            <div className="inst-grid">
              {plans.map(plan => (
                <div 
                  key={plan.id}
                  className={`inst-plan-card ${selectedPlan?.id === plan.id ? 'active' : ''}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="plan-radio"></div>
                  <div className="plan-info">
                    <span className="p-name">
                        {isAr ? plan.plan_name_ar : plan.plan_name_en}
                    </span>
                    <span className="p-time">
                        {plan.duration_months} {isAr ? 'شهر' : 'Months'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <button className="inst-calculate-btn" onClick={calculateInstallment}>
            {isAr ? 'احسب الآن' : 'Calculate Now'}
          </button>
  
          {monthlyInstallment > 0 && (
            <div className="inst-result-display">
              <span className="res-label">
                {isAr ? 'القسط الشهري المتوقع' : 'Estimated Monthly Payment'}
              </span>
              <div className="res-value-wrap">
                <h3 className="res-amount">{Number(monthlyInstallment).toLocaleString()}</h3>
                <span className="res-currency">{isAr ? 'جنية / شهر' : 'EGP/Month'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default InstallmentPage;