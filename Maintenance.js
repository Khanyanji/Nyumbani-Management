// src/components/Maintenance.js
import React, { useState } from 'react';
import MaintenanceRequestCard from './MaintenanceRequestCard';
import NewRequestForm from './NewRequestForm';
import './Maintenance.css';

const Maintenance = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Leaking Kitchen Faucet",
      property: "Sunrise #4B",
      tenant: "John Doe",
      date: "2024-03-25",
      status: "pending",
      priority: "medium"
    }
  ]);

  const [showNewRequestForm, setShowNewRequestForm] = useState(false);

  const updateRequestStatus = (id, newStatus) => {
    setRequests(requests.map(req => 
      req.id === id ? {...req, status: newStatus} : req
    ));
  };

  return (
    <div className="maintenance-container">
      <div className="maintenance-header">
        <h1>Maintenance Requests</h1>
        <button 
          className="new-request-btn"
          onClick={() => setShowNewRequestForm(true)}
        >
          + New Request
        </button>
      </div>

      <div className="requests-list">
        {requests.map(request => (
          <MaintenanceRequestCard 
            key={request.id}
            request={request}
            onStatusChange={updateRequestStatus}
          />
        ))}
      </div>

      {showNewRequestForm && (
        <NewRequestForm
          onClose={() => setShowNewRequestForm(false)}
          onSubmit={(newRequest) => {
            setRequests([...requests, {...newRequest, id: Date.now()}]);
            setShowNewRequestForm(false);
          }}
        />
      )}
    </div>
  );
};

export default Maintenance;