import React, { useState } from 'react';

const PropertyManagement = () => {
    const [units, setUnits] = useState([]);

    const addUnit = (unit) => {
        setUnits([...units, unit]);
    };

    const removeUnit = (unitId) => {
        setUnits(units.filter(unit => unit.id !== unitId));
    };

    return (
        <div className="card">
            <h2>Property Management</h2>
            {/* Add/remove rental units logic here */}
            {/* Display units */}
            {units.map(unit => (
                <div key={unit.id}>
                    <span>{unit.name}</span>
                    <button onClick={() => removeUnit(unit.id)}>Remove</button>
                </div>
            ))}
            <button onClick={() => addUnit({ id: Date.now(), name: 'New Unit' })}>Add Unit</button>
        </div>
    );
};

export default PropertyManagement;S