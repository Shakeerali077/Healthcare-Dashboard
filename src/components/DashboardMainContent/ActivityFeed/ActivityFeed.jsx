// src/components/DashboardMainContent/ActivityFeed/index.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { patientActivityData } from '../../../data/dashboardData';
import './ActivityFeed.css'; // Import the CSS file

const ActivityFeed = () => {
    return (
        <div className="activity-feed-container"> {/* Apply custom class */}
            <h2 className="activity-feed-header"> {/* Apply custom class */}
                <span>Activity</span>
                <span className="activity-feed-subheader">3 appointment on this week</span> {/* Apply custom class */}
            </h2>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={patientActivityData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide={true} />
                    <Tooltip />
                    <Bar dataKey="appointments" fill="#8884d8" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityFeed;