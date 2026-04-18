import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './filtersection.css';
import filters from '../assets/home/filters.svg';
import VehicleCard from './vehiclecard';

const FilterSection = ({ lang = 'en' }) => {
    const [categories, setCategories] = useState([]);
    const [vehicles, setVehicles] = useState([]); 
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await supabase
                .from('vehicle_categories_2')
                .select('*')
                .order('display_order', { ascending: true });
            if (data) setCategories(data);
        };

        const fetchVehicles = async () => {
            const { data } = await supabase
                .from('vehicles_data_2')
                .select('*');
            if (data) setVehicles(data);
        };

        fetchCategories();
        fetchVehicles();
    }, []);

    const isAr = lang === 'ar';

    const filteredVehicles = activeTab === 'all' 
        ? vehicles 
        : vehicles.filter(v => v.category_name_en.toLowerCase() === activeTab.toLowerCase());

    return (
        <>
            <div className={`filter-container ${isAr ? 'rtl' : 'ltr'}`}>
            <div className="scroll-wrapper">
                <button className="filter-main-btn">
                    <img src={filters} alt="filters-icon" />
                    <span>{isAr ? 'فلتر' : 'Filters'}</span>
                </button>


                {categories.map((cat) => (
                    <button 
                        key={cat.id}
                        className={`cat-chip ${activeTab === cat.slug ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat.slug)}
                    >
                        {isAr ? cat.name_ar : cat.name_en}
                    </button>
                ))}
            </div>
            </div>

            <div className="vehicles-list-container">
                {filteredVehicles.map((car) => (
                    <VehicleCard key={car.id} vehicle={car} lang={lang} />

                ))}
            </div>
        </>
    );
}

export default FilterSection;