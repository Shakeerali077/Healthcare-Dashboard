// src/components/DashboardMainContent/AnatomySection/index.jsx
import React from 'react';
import { organData } from '../../../data/dashboardData';
import { HeartPulseIcon, PillIcon } from '../../../Icons'; // Re-using icons for organ status
import ReactLogo from '../../../Icons/body.png'; // Assuming this is your body image
import './AnatomySection.css'; // Import the CSS file

const getOrganIcon = (organName) => {
    switch (organName) {
        case 'Lungs': return <HeartPulseIcon className="organ-icon" />;
        case 'Teeth': return <PillIcon className="organ-icon" />; // Placeholder, adjust icon as needed
        case 'Bone': return <HeartPulseIcon className="organ-icon" />; // Placeholder, adjust icon as needed
        default: return <HeartPulseIcon className="organ-icon" />;
    }
};

// This function likely just logs or handles internal state for "Details" click
const handleDetailsClick = () => {
    console.log('Details button clicked');
    // In a real app, this might open a modal, navigate, etc.
};

const AnatomySection = () => {
    return (
        <div className="anatomy-section-container">
            {/* Placeholder for human body image */}
            <div className="anatomy-image-section">
                <img
                    src={ReactLogo}
                    alt="Human Body"
                    className="anatomy-body-img"
                />
                {/* Healthy Heart overlay */}
                <div className="anatomy-overlay-tag anatomy-heart-overlay">
                    Healthy Heart
                </div>
                {/* Healthy Leg overlay */}
                <div className="anatomy-overlay-tag anatomy-leg-overlay">
                    Healthy Leg
                </div>
            </div>

            {/* Organ Status Cards (Right side of human body) */}
            <div className="organ-status-cards-section">
                {organData.map((organ, index) => (
                    <div key={index} className="organ-card">
                        <div className="organ-icon-wrapper">
                            {getOrganIcon(organ.name)}
                        </div>
                        <div>
                            <h3 className="organ-name">{organ.name}</h3>
                            <p className="organ-date">{organ.date}</p>
                            <div className="progress-bar-container">
                                <div
                                    className="progress-bar-fill"
                                    // Dynamically set width and background color based on organ data
                                    style={{
                                        width: `${organ.percentage}%`,
                                        backgroundColor: organ.status === 'good' ? '#22c55e' :
                                                         organ.status === 'fair' ? '#f59e0b' :
                                                         '#ef4444' // red-500 for 'bad' or default
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* FIX: Changed <a> to <button> for accessibility */}
                <button type="button" onClick={handleDetailsClick} className="details-button">
                    Details
                </button>
            </div>
        </div>
    );
};

export default AnatomySection;