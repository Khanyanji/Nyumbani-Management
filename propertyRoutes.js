// routes/propertyRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController');

router
  .route('/')
  .get(protect, getProperties)
  .post(protect, authorize('landlord'), createProperty);

router
  .route('/:id')
  .put(protect, authorize('landlord'), updateProperty)
  .delete(protect, authorize('landlord'), deleteProperty);

module.exports = router;