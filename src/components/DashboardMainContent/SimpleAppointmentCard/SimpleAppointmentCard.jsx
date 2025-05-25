// src/components/DashboardMainContent/SimpleAppointmentCard/index.jsx
import React from 'react';
import { DentistIcon, PhysiotherapyIcon } from '../../../Icons';
import './SimpleAppointmentCard.css'; // Import the CSS file

const getAppointmentIcon = (type, className) => {
    switch (type) {
        case 'dentist': return <DentistIcon className={className} />;
        case 'physiotherapy': return <PhysiotherapyIcon className={className} />;
        // You'll need more icons for "ophthalmologist", "cardiologist", "neurologist"
        // Or create a generic medical icon if they are not distinct in the design.
        case 'health-checkup': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9v-4h2v4zm4 0h-2v-4h2v4z"/></svg>; // Example generic icon
        case 'ophthalmologist': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="7"/><path d="M12 19V5M5 12h14"/></svg>; // Example eye icon
        case 'cardiologist': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>; // Example heart icon
        case 'neurologist': return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 20V10c0-1.66 1.34-3 3-3h2c1.66 0 3 1.34 3 3v10M12 4v3m0 0H9m3 0h3"/></svg>; // Example brain/nerve icon
        default: return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>; // Generic default
    }
};

// Add iconBgColor to props
const SimpleAppointmentCard = ({ title, time, doctor, type, bgColor, textColor, iconBgColor }) => {
    return (
        // Apply card background and text color directly from props
        <div className="simple-appointment-card" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Apply icon wrapper background color directly from props */}
            <div className="simple-appointment-card-icon-wrapper" style={{ backgroundColor: iconBgColor }}>
                {getAppointmentIcon(type, "simple-appointment-card-icon")}
            </div>
            <div>
                <h3 className="simple-appointment-card-title">{title}</h3>
                <p className="simple-appointment-card-time">{time}</p>
                <p className="simple-appointment-card-doctor">{doctor}</p>
            </div>
        </div>
    );
};

export default SimpleAppointmentCard;