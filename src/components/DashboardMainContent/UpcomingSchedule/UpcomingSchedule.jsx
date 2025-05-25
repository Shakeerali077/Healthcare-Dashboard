// src/components/DashboardMainContent/UpcomingSchedule/index.jsx
import React from 'react';
import ReactGA from 'react-ga4'; // Import ReactGA
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard'; // Correct path
import { upcomingScheduleData } from '../../../data/dashboardData'; // Make sure this is imported
import './UpcomingSchedule.css'; // Import the CSS file

const UpcomingSchedule = () => {

    const handleCardClick = (appointment) => {
        ReactGA.event({
            category: 'Upcoming Schedule',
            action: 'Appointment Card Clicked',
            label: `${appointment.title} - ${appointment.time}`,
            value: 1 // Example: value could be cost of appointment if relevant
        });
        console.log(`GA4 Event: Upcoming appointment card clicked: ${appointment.title}`); // For local testing
    };
    return (
        <div className="upcoming-schedule-container">
            <h2 className="upcoming-schedule-header">The Upcoming Schedule</h2>
            <div className="schedule-list">
                {upcomingScheduleData.map((dayData, index) => (
                    <div key={index} className="schedule-day-group">
                        <h3 className="schedule-day-heading">{dayData.day}</h3>
                        <div className="schedule-cards-grid">
                            {dayData.appointments.map((appointment, apptIndex) => (
                                <SimpleAppointmentCard
                                    key={apptIndex}
                                    title={appointment.title}
                                    time={appointment.time}
                                    doctor={appointment.doctor}
                                    type={appointment.type}
                                    bgColor={appointment.bgColor}      
                                    textColor={appointment.textColor}   
                                    iconBgColor={appointment.iconBgColor} 
                                    onClick={() => handleCardClick(appointment)} // Pass the click handler
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingSchedule;