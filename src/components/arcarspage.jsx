import React from 'react'; 
import './arcarspage.css';
import { Link } from 'react-router-dom';

const ArCars = () => {

    const cars = [
        { id: 1, brand: 'PREMIUM', model: 'Mercedes GLC' , path: '/scene' },
        { id: 2, brand: 'LUXURY', model: 'BMW M4', path: '/m4' },
        { id: 3, brand: 'SPORT', model: 'Porsche 911' },

    ];

    return ( 
        <>

<div className="ride-selection-container">
            <header className="ride-header">
                <h1>Choose Your <span>Ride</span></h1>
                <p>Select a vehicle to start the AR preview</p>
            </header>

            <div className="cars-list-text">
                {cars.map((car) => (
                    <Link to={car.path} key={car.id} className="ride-text-card" style={{ textDecoration: 'none' }}>
                        <div className="card-info">
                            <span className="brand-label">{car.brand}</span>
                            <h3 className="car-model-name">{car.model}</h3>
                        </div>
                        <div className="arrow-wrapper">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </Link>
                ))}
            </div>
</div> 
        
        
        </>
     );
}
 
export default ArCars;