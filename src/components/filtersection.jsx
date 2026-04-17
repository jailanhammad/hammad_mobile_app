import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './filtersection.css';
import filters from '../assets/home/filters.svg';
import VehicleCard from './vehiclecard';

const FilterSection = ({ lang = 'en' }) => {
    const [categories, setCategories] = useState([]);
    const [vehicles, setVehicles] = useState([]); // 1. ضفنا state للعربيات
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        // فتش التصنيفات (الفلاتر)
        const fetchCategories = async () => {
            const { data } = await supabase
                .from('vehicle_categories_2')
                .select('*')
                .order('display_order', { ascending: true });
            if (data) setCategories(data);
        };

        // 2. فتش العربيات من جدول رقم 2
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

    // 3. منطق الفلترة (اختياري لو حابة تفلتري بالنوع)
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

                {/* احذفي زرار الـ All الثابت من هنا */}

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

            {/* 4. هنا الربط الصح: بنلف على العربيات ونبعت البيانات للـ Card */}
            <div className="vehicles-list-container">
                {filteredVehicles.map((car) => (
                    <VehicleCard key={car.id} vehicle={car} lang={lang} />
                ))}
            </div>
        </>
    );
}

export default FilterSection;