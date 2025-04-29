import React, { useState } from 'react';
import PropertyManagement from './components/PropertyManagement';
import PaymentTracking from './components/PaymentTracking';
import Reporting from './components/Reporting';
import Notifications from './components/Notifications';
import './styles/App.css';

function App() {
  // ... existing state and data ...

  return (
    <div className="container">
      <header>
        <h1>Landlord Dashboard</h1>
      </header>
      <main>
        <div className="dashboard-grid">
          <PropertyManagement />
          <PaymentTracking payments={payments} setPayments={setPayments} />
          <Reporting payments={payments} />
          <Notifications 
            payments={payments} 
            maintenanceRequests={maintenanceRequests} 
          />
        </div>
      </main>
    </div>
  );
}S