import React, { useState } from 'react';

const PaymentTracking = () => {
    const [payments, setPayments] = useState([]);

    const addPayment = (payment) => {
        setPayments([...payments, payment]);
    };

    return (
        <div className="card">
            <h2>Payment Tracking</h2>
            {/* Display payment status */}
            {payments.map(payment => (
                <div key={payment.id} className={payment.status === 'paid' ? 'green' : 'red'}>
                    <span>{payment.tenantName}: {payment.amount} - {payment.status}</span>
                </div>
            ))}
            <button onClick={() => addPayment({ id: Date.now(), tenantName: 'Tenant 1', amount: 1000, status: 'unpaid' })}>
                Add Payment
            </button>
        </div>
    );
};

export default PaymentTracking;