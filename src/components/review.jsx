import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './review.css';
import { useTranslation } from 'react-i18next';

const Review = () => { 
  const [reviews, setReviews] = useState([]);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const isAr = currentLang === 'ar';

  useEffect(() => {
    const translations = {
      en: {
        reviews: {
          title: "Customer Reviews",
          viewAll: "View All"
        }
      },
      ar: {
        reviews: {
          title: "آراء العملاء",
          viewAll: "عرض الكل"
        }
      }
    };

    Object.keys(translations).forEach((l) => {
      i18n.addResourceBundle(l, 'translation', translations[l], true, true);
    });
  }, [i18n]);

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

  return (
    <section className={`rev-section ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rev-header">
        <h2 className="rev-title">
          {t('reviews.title')}
        </h2>
        <a href="#all" className="view-link">
          {t('reviews.viewAll')} <span>{isAr ? '‹' : '›'}</span>
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