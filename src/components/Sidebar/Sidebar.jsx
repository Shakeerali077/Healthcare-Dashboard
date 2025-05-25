// src/components/Sidebar/index.jsx
import React from 'react';
import {
  HomeIcon, HistoryIcon, CalendarIcon, UsersIcon, ActivityIcon,
  MessageCircleIcon, LifeBuoyIcon, SettingsIcon
} from '../../Icons';
import './Sidebar.css'; // Import the CSS file

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        Healthcare
      </div>
      <nav className="sidebar-nav">
        <hr className="sidebar-divider" />
        <p className="sidebar-category-title">General</p>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`sidebar-nav-button ${
            activeTab === 'dashboard' ? 'active' : ''
          }`}
        >
          <HomeIcon />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`sidebar-nav-button ${
            activeTab === 'history' ? 'active' : ''
          }`}
        >
          <HistoryIcon />
          <span>History</span>
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`sidebar-nav-button ${
            activeTab === 'calendar' ? 'active' : ''
          }`}
        >
          <CalendarIcon />
          <span>Calendar</span>
        </button>
        <button
          onClick={() => setActiveTab('appointments')}
          className={`sidebar-nav-button ${
            activeTab === 'appointments' ? 'active' : ''
          }`}
        >
          <UsersIcon />
          <span>Appointments</span>
        </button>
        <button
          onClick={() => setActiveTab('statistics')}
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
          onClick={() => setActiveTab('chat')}
          className={`sidebar-nav-button ${
            activeTab === 'chat' ? 'active' : ''
          }`}
        >
          <MessageCircleIcon />
          <span>Chat</span>
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`sidebar-nav-button ${
            activeTab === 'support' ? 'active' : ''
          }`}
        >
          <LifeBuoyIcon />
          <span>Support</span>
        </button>
        <hr className="sidebar-divider" />
        <button
          onClick={() => setActiveTab('settings')}
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