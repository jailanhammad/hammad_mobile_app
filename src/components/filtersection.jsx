import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './filtersection.css';
import VehicleCard from './vehiclecard';
import { useTranslation } from 'react-i18next';

const FilterSection = () => { 
    const [categories, setCategories] = useState([]);
    const [vehicles, setVehicles] = useState([]); 
    const [activeTab, setActiveTab] = useState('all');

    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isAr = currentLang === 'ar';

    useEffect(() => {
        const translations = {
            en: {
                filter: {
                    btn: "Filters",
                    all: "All"
                }
            },
            ar: {
                filter: {
                    btn: "فلتر",
                    all: "الكل"
                }
            }
        };

        Object.keys(translations).forEach((l) => {
            i18n.addResourceBundle(l, 'translation', translations[l], true, true);
        });
    }, [i18n]);

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

    const filteredVehicles = activeTab === 'all' 
        ? vehicles 
        : vehicles.filter(v => v.category_name_en.toLowerCase() === activeTab.toLowerCase());

    return (
        <>
            <div className={`filter-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <div className="scroll-wrapper">
    

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

            <div className={`vehicles-list-container ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
                {filteredVehicles.map((car) => (
                    <VehicleCard key={car.id} vehicle={car} lang={currentLang} />
                ))}
            </div>
        </>
    );
}

export default FilterSection;