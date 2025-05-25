// src/components/DashboardMainContent/UpcomingSchedule/index.jsx
import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard'; // Correct path
import { upcomingScheduleData } from '../../../data/dashboardData'; // Make sure this is imported
import './UpcomingSchedule.css'; // Import the CSS file

const UpcomingSchedule = () => {
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