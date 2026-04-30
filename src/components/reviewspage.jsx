import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './reviewspage.css';
import Review from '../components/review';
import { useTranslation } from 'react-i18next';

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ user_name: '', rating: 5, comment: '' });
  
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    useEffect(() => {
      fetchReviews();
    }, []);
  
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('hammad_reviews')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setReviews(data);
    };
  
    const handleSubmitReview = async (e) => {
      e.preventDefault();
      const { error } = await supabase.from('hammad_reviews').insert([newReview]);
      
      if (error) {
        alert(isAr ? "خطأ: " + error.message : "Error: " + error.message);
      } else {
        alert(isAr ? "تم إرسال تقييمك بنجاح!" : "Review submitted successfully!");
        setShowForm(false);
        setNewReview({ user_name: '', rating: 5, comment: '' });
        fetchReviews();
      }
    };
  
    return (
        <>
        <div className={`reviews-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <h2 className="trusted-title">
                {isAr ? 'موثوق به من الآلاف' : 'Trusted by thousands'}
            </h2>
            
            <div className="rating-card">
                <div className="rating-header">
                    <h1 className="rating-score">4.9</h1>
                    <div className="stars-row">★★★★★</div>
                    <p className="reviews-count">
                        {isAr ? `بناءً على ${reviews.length > 0 ? reviews.length : '2,847'} تقييم` : `Based on ${reviews.length > 0 ? reviews.length : '2,847'} reviews`}
                    </p>
                </div>
    
                <div className="rating-bars-list">
                    {[
                        { s: 5, p: '85%' }, { s: 4, p: '12%' }, { s: 3, p: '3%' }, 
                        { s: 2, p: '3%' }, { s: 1, p: '3%' }
                    ].map((item) => (
                        <div key={item.s} className="bar-item">
                            <span className="star-label">{item.s} ★</span>
                            <div className="progress-bg">
                                <div className="progress-fill" style={{ width: item.p }}></div>
                            </div>
                            <span className="percent-label">{item.p}</span>
                        </div>
                    ))}
                </div>
            </div>
    
            <div className="reviews-actions">
                <button className="write-review-btn" onClick={() => setShowForm(true)}>
                    {isAr ? 'اكتب تقييمك' : 'Write Review'}
                </button>
            </div>
    
            {showForm && (
                <div className="review-modal">
                    <div className="review-form-card">
                        <h3>{isAr ? 'شاركنا تجربتك' : 'Share your experience'}</h3>
                        <form onSubmit={handleSubmitReview}>
                            <input 
                                type="text" 
                                placeholder={isAr ? 'اسمك' : 'Your Name'} 
                                required 
                                onChange={(e) => setNewReview({...newReview, user_name: e.target.value})}
                            />
                            <select onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}>
                                <option value="5">{isAr ? '5 نجوم' : '5 Stars'}</option>
                                <option value="4">{isAr ? '4 نجوم' : '4 Stars'}</option>
                                <option value="3">{isAr ? '3 نجوم' : '3 Stars'}</option>
                                <option value="2">{isAr ? 'نجمتين' : '2 Stars'}</option>
                                <option value="1">{isAr ? 'نجمة واحدة' : '1 Star'}</option>
                            </select>
                            <textarea 
                                placeholder={isAr ? 'تقييمك' : 'Your Review'} 
                                required 
                                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                            ></textarea>
                            <div className="form-btns">
                                <button type="submit" className="submit-rev-btn">{isAr ? 'إرسال' : 'Submit'}</button>
                                <button type="button" className="cancel-rev-btn" onClick={() => setShowForm(false)}>{isAr ? 'إلغاء' : 'Cancel'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
    
            <div className="real-reviews-list">
                {reviews.map((rev) => (
                    <div key={rev.id} className="review-display-item">
                        <div className="rev-user-info">
                            <strong>{rev.user_name}</strong>
                            <span className="rev-stars">{"★".repeat(rev.rating)}</span>
                        </div>
                        <p className="rev-comment">{rev.comment}</p>
                    </div>
                ))}
            </div>
        </div>

        <Review lang={i18n.language} />
        </>
    );
};
  
export default ReviewsSection;