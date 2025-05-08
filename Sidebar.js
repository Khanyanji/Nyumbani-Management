// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Nyumbani</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/properties">
            <i className="fas fa-home"></i> Properties
          </Link>
        </li>
        <li>
          <Link to="/tenants">
            <i className="fas fa-users"></i> Tenants
          </Link>
        </li>
        <li>
          <Link to="/financials">
            <i className="fas fa-chart-line"></i> Financials
          </Link>
        </li>
        <li>
          <Link to="/maintenance">
            <i className="fas fa-tools"></i> Maintenance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;