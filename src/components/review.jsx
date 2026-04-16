import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './review.css';

const Review = ({ lang = 'en' }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('customer_reviews_2')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (data) setReviews(data);
      if (error) console.error("Error:", error.message);
    };
    fetchReviews();
  }, []);

  const isAr = lang === 'ar';

  return (
    <section className={`rev-section ${isAr ? 'rtl' : 'ltr'}`}>
      <div className="rev-header">
        <h2 className="rev-title">
          {isAr ? 'آراء العملاء' : 'Customer Reviews'}
        </h2>
        <a href="#all" className="view-link">
          {isAr ? 'عرض الكل' : 'View All'} <span>{isAr ? '‹' : '›'}</span>
        </a>
      </div>

      {reviews.map((rev) => (
        <div key={rev.id} className="rev-card">
          <div className="rev-user-row">
            <div className="user-avatar">
              <img src={rev.user_avatar} alt={isAr ? rev.user_name_ar : rev.user_name_en} />
            </div>
            
            <div className="user-meta">
              <div className="name-box">
                <h3>{isAr ? rev.user_name_ar : rev.user_name_en}</h3>
                {rev.is_verified && <span className="v-check">✓</span>}
              </div>
              <div className="rating-row">
                <div className="stars">
                  {'⭐'.repeat(rev.rating)}
                </div>
                <span className="rev-date">
                  {isAr ? rev.date_text_ar : rev.date_text_en}
                </span>
              </div>
            </div>
          </div>

          <div className="rev-content">
            <p>{isAr ? rev.comment_ar : rev.comment_en}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Review;