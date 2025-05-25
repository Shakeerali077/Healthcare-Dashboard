// src/components/Sidebar/index.jsx
import React from 'react';
import ReactGA from 'react-ga4'; // Import ReactGA
import {
    HomeIcon, HistoryIcon, CalendarIcon, UsersIcon, ActivityIcon,
    MessageCircleIcon, LifeBuoyIcon, SettingsIcon
} from '../../Icons';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {

    const handleNavigationClick = (tabName) => {
        // First, update the active tab in your component's state
        setActiveTab(tabName);

        // Then, send a GA4 event
        ReactGA.event({
            category: 'Sidebar Navigation',
            action: `Clicked ${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`, // Capitalize for better readability in GA reports
            label: `Mapsd to ${tabName.charAt(0).toUpperCase() + tabName.slice(1)} Section`,
        });
        console.log(`GA4 Event: Clicked Sidebar Link - ${tabName}`); // For local testing
    };

    return (
        <aside className="sidebar-container">
            <div className="sidebar-logo">
                Healthcare
            </div>
            <nav className="sidebar-nav">
                <hr className="sidebar-divider" />
                <p className="sidebar-category-title">General</p>
                <button
                    onClick={() => handleNavigationClick('dashboard')}
                    className={`sidebar-nav-button ${
                        activeTab === 'dashboard' ? 'active' : ''
                    }`}
                >
                    <HomeIcon />
                    <span>Dashboard</span>
                </button>
                <button
                    onClick={() => handleNavigationClick('history')}
                    className={`sidebar-nav-button ${
                        activeTab === 'history' ? 'active' : ''
                    }`}
                >
                    <HistoryIcon />
                    <span>History</span>
                </button>
                <button
                    onClick={() => handleNavigationClick('calendar')}
                    className={`sidebar-nav-button ${
                        activeTab === 'calendar' ? 'active' : ''
                    }`}
                >
                    <CalendarIcon />
                    <span>Calendar</span>
                </button>
                <button
                    onClick={() => handleNavigationClick('appointments')}
                    className={`sidebar-nav-button ${
                        activeTab === 'appointments' ? 'active' : ''
                    }`}
                >
                    <UsersIcon />
                    <span>Appointments</span>
                </button>
                <button
                    onClick={() => handleNavigationClick('statistics')}
                    className={`sidebar-nav-button ${
                        activeTab === 'statistics' ? 'active' : ''
                    }`}
                >
                    <ActivityIcon />
                    <span>Statistics</span>
                </button>
                <hr className="sidebar-divider" />
                <p className="sidebar-category-title">Tools</p>
                <button
                    onClick={() => handleNavigationClick('chat')}
                    className={`sidebar-nav-button ${
                        activeTab === 'chat' ? 'active' : ''
                    }`}
                >
                    <MessageCircleIcon />
                    <span>Chat</span>
                </button>
                <button
                    onClick={() => handleNavigationClick('support')}
                    className={`sidebar-nav-button ${
                        activeTab === 'support' ? 'active' : ''
                    }`}
                >
                    <LifeBuoyIcon />
                    <span>Support</span>
                </button>
                <hr className="sidebar-divider" />
                <button
                    onClick={() => handleNavigationClick('settings')}
                    className={`sidebar-nav-button ${
                        activeTab === 'settings' ? 'active' : ''
                    }`}
                >
                    <SettingsIcon />
                    <span>Setting</span>
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;