// src/components/DashboardMainContent/index.jsx
import React from 'react';
import ReactGA from 'react-ga4'; // Make sure to import ReactGA
import AnatomySection from './AnatomySection/AnatomySection';
import CalendarView from './CalendarView/CalendarView';
import SimpleAppointmentCard from './SimpleAppointmentCard/SimpleAppointmentCard';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import { specificAppointments } from '../../data/dashboardData';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
    // Function to handle the date selector click
    const handleDateSelectorClick = () => {
        ReactGA.event({
            category: 'Dashboard Interaction',
            action: 'Date Selector Clicked',
            label: 'This Week',
            value: 1 // Optional: assign a value if relevant
        });
        console.log("GA4 Event: Date Selector Clicked"); // For local testing
    };

    return (
        <div>
            <div className="dashboard-header-section">
                <h1 className="dashboard-title">Dashboard</h1>
                <div className="date-selector" onClick={handleDateSelectorClick}> {/* Add onClick */}
                    <span>This Week</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="date-selector-icon">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="left-column">
                    <AnatomySection /> {/* AnatomySection will handle its own click */}
                    <ActivityFeed />
                </div>

                <div className="right-column">
                    <CalendarView />
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
                                iconBgColor={appointment.iconBgColor}
                                // You could add an onClick here if you want to track individual specific cards
                                // onClick={() => console.log('Specific appointment card clicked')}
                            />
                        ))}
                    </div>
                    <UpcomingSchedule /> {/* UpcomingSchedule will handle its own card clicks */}
                </div>
            </div>
        </div>
    );
};

export default DashboardMainContent;