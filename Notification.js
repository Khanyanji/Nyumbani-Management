import React, { useState } from 'react';

const Notifications = ({ payments, maintenanceRequests }) => {
    const [overdueAlerts, setOverdueAlerts] = useState([]);

    // Function to check for overdue rent payments
    const checkOverduePayments = () => {
        const today = new Date();
        const alerts = payments.filter(payment => {
            const dueDate = new Date(payment.dueDate);
            return payment.status === 'unpaid' && dueDate < today;
        });
        setOverdueAlerts(alerts);
    };

    // Function to handle maintenance requests
    const handleMaintenanceRequest = (requestId) => {
        // Logic to mark the request as handled (e.g., remove from the list or update status)
        console.log(`Handling maintenance request with ID: ${requestId}`);
    };

    return (
        <div className="card">
            <h2>Notifications</h2>
            <button onClick={checkOverduePayments}>Check Overdue Payments</button>
            <div>
                <h3>Overdue Rent Alerts</h3>
                {overdueAlerts.length > 0 ? (
                    <ul>
                        {overdueAlerts.map(alert => (
                            <li key={alert.id}>
                                <span>{alert.tenantName} - Due: ${alert.amount} on {new Date(alert.dueDate).toLocaleDateString()}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No overdue rent payments.</p>
                )}
            </div>
            <div>
                <h3>Maintenance Requests</h3>
                {maintenanceRequests.length > 0 ? (
                    <ul>
                        {maintenanceRequests.map(request => (
                            <li key={request.id}>
                                <span>{request.description} (Requested by: {request.tenantName})</span>
                                <button onClick={() => handleMaintenanceRequest(request.id)}>Mark as Handled</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No maintenance requests.</p>
                )}
            </div>
        </div>
    );
};

export default Notifications;