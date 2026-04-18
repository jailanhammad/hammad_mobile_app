import React from 'react';
import './explorepage.css';

const ExplorePage = () => {
    const categories = [
        { id: 1, title: 'Electric Future', tag: 'TRENDING', img: '⚡', size: 'large' },
        { id: 2, title: 'Classic', tag: 'VINTAGE', img: '🏎️', size: 'small' },
        { id: 3, title: 'Off-Road', tag: 'ADVENTURE', img: '⛰️', size: 'small' },
        { id: 4, title: 'Luxury Interior', tag: 'PREMIUM', img: '💎', size: 'medium' },
        { id: 5, title: 'Sport Mode', tag: 'SPEED', img: '🏁', size: 'medium' },
    ];

    return (
        <div className="explore-container">
            <header className="explore-header">
                <span className="subtitle">Discover the best</span>
                <h1>Explore <span>Cars</span></h1>
            </header>

            <div className="bento-grid">
                {categories.map(cat => (
                    <div key={cat.id} className={`bento-item ${cat.size}`}>
                        <div className="card-content">
                            <span className="tag">{cat.tag}</span>
                            <h3>{cat.title}</h3>
                        </div>
                        <div className="card-bg">{cat.img}</div>
                        <div className="glass-overlay"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;