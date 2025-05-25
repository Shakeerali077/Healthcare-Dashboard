// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './App.css'; // Import the main App CSS

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="main-content-area">
        <Header />

        {/* Content based on activeTab */}
        {activeTab === 'dashboard' && <DashboardMainContent />}

        {/* Placeholder contents for other tabs */}
        {activeTab === 'history' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">Patient History</h2>
                <p className="placeholder-content-text">
                    This section would display a comprehensive history of patient visits, treatments, and records.
                </p>
            </div>
        )}

        {activeTab === 'calendar' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">Full Calendar View</h2>
                <p className="placeholder-content-text">
                    A more detailed and interactive calendar for managing all appointments.
                </p>
            </div>
        )}

        {activeTab === 'appointments' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">All Appointments</h2>
                <p className="placeholder-content-text">
                    Manage and view all scheduled appointments here.
                </p>
            </div>
        )}

        {activeTab === 'statistics' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">Detailed Statistics</h2>
                <p className="placeholder-content-text">
                    In-depth statistical analysis of various healthcare metrics.
                </p>
            </div>
        )}

        {activeTab === 'chat' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">Internal Chat System</h2>
                <p className="placeholder-content-text">
                    Communicate with other staff members and doctors here.
                </p>
            </div>
        )}

        {activeTab === 'support' && (
            <div className="placeholder-content">
                <h2 className="placeholder-content-title">Support & Help</h2>
                <p className="placeholder-content-text">
                    Find help, FAQs, or contact support for assistance.
                </p>
            </div>
        )}

        {activeTab === 'settings' && (
          <div className="placeholder-content">
            <h2 className="placeholder-content-title">Settings</h2>
            <p className="placeholder-content-text">
              This section would allow administrators to configure various aspects of the healthcare dashboard,
              such as user permissions, notification settings, and data integration options.
            </p>
            <div className="settings-section-container">
              <div className="settings-item">
                <label htmlFor="notifications" className="settings-label">Email Notifications</label>
                <input type="checkbox" id="notifications" className="settings-checkbox" />
              </div>
              <div className="settings-item">
                <label htmlFor="dark-mode" className="settings-label">Dark Mode</label>
                <input type="checkbox" id="dark-mode" className="settings-checkbox" />
              </div>
              <button className="save-settings-button">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;