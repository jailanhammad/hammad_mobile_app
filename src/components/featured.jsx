// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabase';
// import './featured.css';
// import { NavLink } from "react-router-dom"; 

// const Featured = ({ lang = 'en' }) => {
//   const [car, setCar] = useState(null);

//   useEffect(() => {
//     const fetchFeatured = async () => {
//       const { data } = await supabase
//         .from('featured_cars')
//         .select('*')
//         .single(); 
      
//       if (data) setCar(data);
//     };
//     fetchFeatured();
//   }, []);

//   if (!car) return null; 

//   const isAr = lang === 'ar';

//   return (
//     <div className={`mobile-container ${isAr ? 'rtl' : 'ltr'}`}>
//       <div className="featured-card">
//         <img 
//           src={car.image_url}
//           alt={isAr ? car.car_title_ar : car.car_title_en} 
//           className="featured-image" 
//         />
        
//         <div className="overlay"></div>

//         <div className="content-container">
//           <div className="badge">
//             <span className="badge-text">
//               {isAr ? car.badge_text_ar : car.badge_text_en}
//             </span>
//           </div>
          
//           <h1 className="car-title">
//             {isAr ? car.car_title_ar : car.car_title_en}
//           </h1>
          
//           <div className="footer-row">
//             <span className="price">
//               {isAr ? car.price_ar : car.price_en}
//             </span>
            

//             <NavLink to="/carpage" className="brand-navlink" end>
//             <div className="arrow-icon">
//             <span className="arrow-icon">{isAr ? '←' : '→'}</span>
//             </div>
//             </NavLink>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;



import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './featured.css';
import { NavLink } from "react-router-dom"; 

const Featured = ({ lang = 'en' }) => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data } = await supabase
        .from('featured_cars')
        .select('*')
        .single(); 
      
      if (data) setCar(data);
    };
    fetchFeatured();
  }, []);

  if (!car) return null; 

  // التأكد من حالة اللغة
  const isAr = lang === 'ar';

  return (
    // الـ div ده هيشيل الـ class المسؤول عن الاتجاه وكمان الـ dir الخاص بالمتصفح
    <div className={`mobile-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="featured-card">
        <img 
          src={car.image_url}
          alt={isAr ? car.car_title_ar : car.car_title_en} 
          className="featured-image" 
        />
        
        <div className="overlay"></div>

        <div className="content-container">
          <div className="badge">
            <span className="badge-text">
              {isAr ? car.badge_text_ar : car.badge_text_en}
            </span>
          </div>
          
          <h1 className="car-title">
            {isAr ? car.car_title_ar : car.car_title_en}
          </h1>
          
          <div className="footer-row">
            <span className="price">
              {/* لو السعر رقم، ممكن تضيق كلمة "ريال" أو "جنية" هنا حسب اللغة */}
              {isAr ? car.price_ar : car.price_en}
            </span>
            
            <NavLink to="/carpage" className="brand-navlink" end>
              <div className="arrow-icon">
                {/* السهم هيتعكس تلقائياً مع اتجاه الصفحة */}
                <span className="arrow-icon">{isAr ? '←' : '→'}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;