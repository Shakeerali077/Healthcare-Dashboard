// src/components/DashboardMainContent/index.jsx
import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import CalendarView from './CalendarView/CalendarView';
import SimpleAppointmentCard from './SimpleAppointmentCard/SimpleAppointmentCard';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import { specificAppointments } from '../../data/dashboardData'; // For the two specific cards
import './DashboardMainContent.css'; // Import the CSS file

const DashboardMainContent = () => {
    return (
        <div>


            <div className="dashboard-grid">
                {/* Left Column: Human Body & Activity */}
                <div className="left-column">
                    <div className="dashboard-header-section">
                        <h1 className="dashboard-title">Dashboard</h1>
                        <div className="date-selector">
                            <span>This Week</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="date-selector-icon">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                    <AnatomySection />
                    <ActivityFeed />
                </div>

                {/* Right Column: Calendar & Upcoming Schedule */}
                <div className="right-column">

                    <CalendarView />
                    {/* Specific Appointment Details Cards */}
                    <div className="specific-appointments-grid">
                        {specificAppointments.map((appointment, index) => (
                            <SimpleAppointmentCard
                                key={index}
                                title={appointment.title}
                                time={appointment.time}
                                doctor={appointment.doctor}
                                type={appointment.type}
                                bgColor={appointment.bgColor}
                                textColor={appointment.textColor}
                            />
                        ))}
                    </div>
                    <UpcomingSchedule />

                </div>
            </div>
        </div>
    );
};

export default DashboardMainContent;