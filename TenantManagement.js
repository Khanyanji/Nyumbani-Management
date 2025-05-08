// src/components/Tenants.js
import React, { useState } from 'react';
import TenantTable from './TenantTable';
import AddTenantModal from './AddTenantModal';
import SearchBar from './SearchBar';
import './Tenants.css';

const Tenants = () => {
  const [tenants, setTenants] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+254712345678",
      property: "Sunrise Apartments #4B",
      rentDueDate: "2024-04-05",
      status: "current"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredTenants = tenants.filter(tenant =>
    tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.property.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tenants-container">
      <div className="tenants-header">
        <h1>Tenant Management</h1>
        <div className="controls">
          <SearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tenants..."
          />
          <button 
            className="add-tenant-btn"
            onClick={() => setShowAddModal(true)}
          >
            + Add Tenant
          </button>
        </div>
      </div>

      <TenantTable 
        tenants={filteredTenants}
        onEdit={(id, updates) => {
          setTenants(tenants.map(t => t.id === id ? {...t, ...updates} : t));
        }}
        onDelete={(id) => setTenants(tenants.filter(t => t.id !== id))}
      />

      {showAddModal && (
        <AddTenantModal
          onClose={() => setShowAddModal(false)}
          onAdd={(newTenant) => {
            setTenants([...tenants, {...newTenant, id: Date.now()}]);
            setShowAddModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Tenants;