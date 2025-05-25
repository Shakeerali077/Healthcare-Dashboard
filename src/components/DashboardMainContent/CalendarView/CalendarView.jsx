// src/components/DashboardMainContent/CalendarView/index.jsx
import React from 'react';
import { calendarDays, timeSlots, activeTimeSlots } from '../../../data/dashboardData';
import './CalendarView.css'; // Import the CSS file

const CalendarView = () => {
    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2 className="calendar-title">October 2021</h2>
                <div className="calendar-nav-buttons">
                    <button className="calendar-nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="calendar-nav-button-icon">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <button className="calendar-nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="calendar-nav-button-icon">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Calendar Grid */}
            <div className="calendar-grid-header">
                {/* Day Headers */}
                {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="calendar-day-name">{day}</div>
                ))}
            </div>
            {/* Dates - Fill in leading empty cells for Oct 25, 2021 (which is a Monday) */}
            <div className="calendar-date-grid"> {/* This div now wraps the date cells grid */}
                {/* This part of the logic needs to correctly align the 1st of the month.
                    For October 2021, Oct 1st was a Friday. To make Oct 25th a Monday (as per your code comment,
                    which implies a week view or a specific start date for the displayed range),
                    the `calendarDays` data needs to be structured accordingly or empty divs adjusted.
                    Assuming `calendarDays` accounts for this or you're starting the display from a specific Monday.
                */}
                {Array(3 * 7 - calendarDays.length).fill(null).map((_, i) => <div key={`empty-${i}`}></div>)}
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`calendar-date-cell ${
                            day.isHighlighted ? 'calendar-date-highlighted' :
                            day.hasAppointment ? 'calendar-date-appointment' : ''
                        }`}
                    >
                        {day.date}
                    </div>
                ))}
            </div>

            {/* Time Slots */}
            <div className="time-slots-grid">
                {timeSlots.map((time, timeIndex) => (
                    <React.Fragment key={timeIndex}>
                        {calendarDays.map((day, dayIndex) => {
                            const isActive = activeTimeSlots[day.day] && activeTimeSlots[day.day].includes(time);
                            return (
                                <div
                                    key={`${day.day}-${time}`}
                                    className={`time-slot-cell ${isActive ? 'time-slot-active' : ''}`}
                                >
                                    {time}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CalendarView;