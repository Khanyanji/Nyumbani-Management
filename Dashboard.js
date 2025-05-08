// src/components/Dashboard.js
import React from 'react';
import SummaryCard from './SummaryCard';
import RecentActivity from './RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: 'Total Properties', value: 12, icon: 'fa-home', color: 'blue' },
    { title: 'Active Tenants', value: 8, icon: 'fa-users', color: 'green' },
    { title: 'Vacant Units', value: 4, icon: 'fa-door-open', color: 'orange' },
    { title: 'Monthly Income', value: '$3,850', icon: 'fa-dollar-sign', color: 'purple' },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <SummaryCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="dashboard-content">
        <RecentActivity />
        <div className="upcoming-payments">
          <h2>Upcoming Rent Payments</h2>
          {/* Payment list would go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;