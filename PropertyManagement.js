// src/components/Properties.js
import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import AddPropertyModal from './AddPropertyModal';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Sunrise Apartments',
      address: '123 Main St, Nairobi',
      type: 'Apartment',
      units: 5,
      occupied: 3,
      image: 'https://via.placeholder.com/300'
    },
    // More properties...
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="properties">
      <div className="properties-header">
        <h1>Property Management</h1>
        <button onClick={() => setShowModal(true)} className="add-property-btn">
          + Add Property
        </button>
      </div>
      
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      {showModal && (
        <AddPropertyModal 
          onClose={() => setShowModal(false)} 
          onAddProperty={(newProperty) => {
            setProperties([...properties, newProperty]);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Properties;