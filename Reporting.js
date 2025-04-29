import React, { useState } from 'react';

const Reporting = ({ payments }) => {
    const [reportData, setReportData] = useState([]);
    const [exportFormat, setExportFormat] = useState('');

    // Function to generate monthly financial summaries
    const generateReport = () => {
        const summary = {};
        payments.forEach(payment => {
            const month = new Date(payment.date).toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!summary[month]) {
                summary[month] = { total: 0, paid: 0, unpaid: 0 };
            }
            summary[month].total += payment.amount;
            if (payment.status === 'paid') {
                summary[month].paid += payment.amount;
            } else {
                summary[month].unpaid += payment.amount;
            }
        });
        setReportData(summary);
    };

    // Function to export reports
    const exportReport = () => {
        if (exportFormat === 'pdf') {
            // Logic to export as PDF (using jsPDF or similar library)
            console.log('Exporting as PDF...');
        } else if (exportFormat === 'excel') {
            // Logic to export as Excel (using xlsx or similar library)
            console.log('Exporting as Excel...');
        }
    };

    return (
        <div className="card">
            <h2>Reporting</h2>
            <button onClick={generateReport}>Generate Monthly Summary</button>
            <div>
                <h3>Monthly Financial Summary</h3>
                {Object.keys(reportData).length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Total Amount</th>
                                <th>Paid Amount</th>
                                <th>Unpaid Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(reportData).map(([month, data]) => (
                                <tr key={month}>
                                    <td>{month}</td>
                                    <td>${data.total.toFixed(2)}</td>
                                    <td className="green">${data.paid.toFixed(2)}</td>
                                    <td className="red">${data.unpaid.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No report data available. Generate a report to see the summary.</p>
                )}
            </div>
            <div>
                <h3>Export Report</h3>
                <select onChange={(e) => setExportFormat(e.target.value)} value={exportFormat}>
                    <option value="">Select Format</option>
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel</option>
                </select>
                <button onClick={exportReport} disabled={!exportFormat}>Export</button>
            </div>
        </div>
    );
};

export default Reporting;