import React from 'react'; 
import './arcarspage.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArCars = () => {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const cars = [
        { id: 1, brand: isAr ? 'فخمة' : 'PREMIUM', model: isAr ? 'مرسيدس GLC' : 'Mercedes GLC' , path: '/scene' },
        { id: 2, brand: isAr ? 'رفاهية' : 'LUXURY', model: isAr ? 'بي إم دبليو M4' : 'BMW M4', path: '/m4' },
    ];

    return ( 
        <div className={`ride-selection-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <header className="ride-header">
                <h1>
                    {isAr ? 'اختر ' : 'Choose Your '}
                    <span>{isAr ? 'سيارتك' : 'Ride'}</span>
                </h1>
                <p>{isAr ? 'اختر سيارة لبدء معاينة الواقع المعزز' : 'Select a vehicle to start the AR preview'}</p>
            </header>

            <div className="cars-list-text">
                {cars.map((car) => (
                    <Link to={car.path} key={car.id} className="ride-text-card" style={{ textDecoration: 'none' }}>
                        <div className="card-info">
                            <span className="brand-label">{car.brand}</span>
                            <h3 className="car-model-name">{car.model}</h3>
                        </div>
                        <div className="arrow-wrapper">
                            <i className={`fas ${isAr ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                        </div>
                    </Link>
                ))}
            </div>
        </div> 
    );
}
 
export default ArCars;