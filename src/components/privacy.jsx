import React from 'react';
import { NavLink } from "react-router-dom"; 
import './privacy.css';

const Privacy = () => {

    const openPrivacy = async () => {

        const url = 'https://gist.github.com/jailanhammad/d19beaa553049767aefd3bbbf48da532';
        window.open(url, '_blank');
    
    };

    return (
        <div className="privacy-container-007">

            <NavLink to="/settings" className="underline" end>
            <button className="back-button-007">
                ← Back
            </button>
            </NavLink>

            <div className="privacy-card-007">
                <div className="privacy-icon-007">🛡️</div>
                <h1 className="privacy-title-007">Hammad Motors</h1>
                <p className="privacy-text-007">
                    نحن نلتزم بحماية بياناتك الشخصية بمعايير عالمية. يمكنك الاطلاع على سياسة الخصوصية من خلال الرابط أدناه.
                </p>
                
                <button 
                    className="privacy-button-007"
                    onClick={openPrivacy}
                >
                    Privacy Policy
                </button>
            </div>
        </div>
    );
}

export default Privacy;