import React from 'react';
import './aboutus.css';
import { FaGlobe, FaGem, FaShieldAlt, FaTrophy } from 'react-icons/fa';
import Galaxy from '../components/galaxy';
import hero from '../assets/about/about-hero.svg';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className={`detailing-page ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div>
        
        <section className="detailing-section">
          <img src={hero} alt="hero" />

          <div className="section-content">
            <h1 className="main-title-0">
              <span className='hammad'>{isAr ? 'حماد ' : 'Hammad '}</span>
              <br />
              {isAr ? 'موتورز' : 'Motors'}
            </h1>
            <div className="line-divider"></div>
            <p className="description-0">
              {isAr 
                ? "محمود حماد هو مؤسس والقائد الرؤيوي لشركة حماد موتورز. بخبرة تتخطى الـ 28 عاماً في سوق السيارات، نجح في بناء الشركة على أسس من الثقة، النزاهة، والعلاقات القوية طويلة الأمد مع العملاء."
                : "Mahmoud Hammad is the founder and visionary leader of Hammad Motors. With over 28 years of experience in the automotive market, he built the company on trust, integrity, and long-term customer relationships."
              }
            </p>
          </div>
        </section>

        <section className="detailing-section-mission">
          <span className="section-label">{isAr ? 'شغف القيادة' : 'THE DRIVE'}</span>
          <div className="section-content">
             <h2 className="sub-title">
               {isAr ? 'نضع ' : 'Defining the '}
               <br />
               {isAr ? 'المعايير' : 'Standard'}
             </h2>
             <div className="vision-grid">
                <div className="vision-card">
                   <FaTrophy className="red-icon" />
                   <h3>{isAr ? 'الرسالة' : 'The Mission'}</h3>
                   <p>{isAr ? 'تسهيل عملية امتلاك السيارات الفارهة تماماً من خلال الشفافية التامة وتقديم خدمات راقية تليق بنخبة عملائنا.' : 'To eliminate the friction of luxury car acquisition through transparency and elite white-glove service.'}</p>
                </div>
                <div className="vision-card">
                   <FaGem className="red-icon" />
                   <h3>{isAr ? 'الرؤية' : 'The Vision'}</h3>
                   <p>{isAr ? 'أن نكون الاسم الأول والأبرز الذي يخطر ببال أي سائق يبحث عن سيارة تعكس هيبته وتاريخه.' : 'To be the first name mentioned when a driver seeks a vehicle that defines their legacy.'}</p>
                </div>
             </div>
          </div>
        </section>

        <section className="detailing-section-experience">
          <div className="section-content">
            <h2 className="sub-title">
              {isAr ? 'لماذا حماد ' : 'Why Hammad '}
              <br />
              {isAr ? 'موتورز؟' : 'Motors?'}
            </h2>
            <p className="fade-text">{isAr ? 'المعيار الذهبي في عالم اقتناء السيارات.' : 'The gold standard in automotive acquisition.'}</p>
            
            <div className="experience-grid">
              <div className="exp-item">
                <div className="exp-icon"><FaShieldAlt /></div>
                <div className="exp-text">
                  <h4>{isAr ? 'معرض سيارات موثوق' : 'Trusted Car Dealership'}</h4>
                  <p>{isAr ? 'بنينا سمعة عالمية من الثقة والتميز من خلال سنوات طويلة من الاحترافية والريادة في مجال السيارات.' : 'Building a global reputation for trust and excellence through years of automotive mastery.'}</p>
                </div>
              </div>
           
              <div className="exp-item">
                <div className="exp-icon"><FaGlobe /></div>
                <div className="exp-text">
                  <h4>{isAr ? 'دعم وتواجد عالمي' : 'Global Support'}</h4>
                  <p>{isAr ? 'من خلال فروعنا ، نقدم خدماتنا المتميزة لعملائنا في كل مكان.' : 'With multiple branches, we deliver excellence everywhere.'}</p>
                </div>
              </div>
              <div className="exp-item">
                <div className="exp-icon"><FaGem /></div>
                <div className="exp-text">
                  <h4>{isAr ? 'أفضل أنظمة تقسيط' : 'Best Financing'}</h4>
                  <p>{isAr ? 'نقدم حصرياً أفضل نسب فوائد وبرامج تمويلية مصممة خصيصاً لتناسب أسلوب حياتك.' : 'Exclusive financing rates and tailored packages to suit your lifestyle.'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;