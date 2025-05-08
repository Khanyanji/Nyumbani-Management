// controllers/propertyController.js
const db = require('../config/db');

exports.createProperty = async (req, res) => {
  try {
    const { name, address, type, units, amenities, monthly_rent } = req.body;
    
    const [propertyId] = await db('properties').insert({
      name,
      address,
      type,
      landlord_id: req.user.id,
      units,
      amenities: JSON.stringify(amenities),
      monthly_rent
    });

    const [newProperty] = await db('properties').where('id', propertyId);
    
    res.status(201).json({
      ...newProperty,
      amenities: JSON.parse(newProperty.amenities)
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await db('properties')
      .where('landlord_id', req.user.id)
      .select('*');

    const formattedProperties = properties.map(property => ({
      ...property,
      amenities: JSON.parse(property.amenities)
    }));

    res.json(formattedProperties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};