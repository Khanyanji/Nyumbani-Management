// routes/tenantRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getTenants,
  createTenant,
  updateTenant
} = require('../controllers/tenantController');

router
  .route('/')
  .get(protect, getTenants)
  .post(protect, authorize('landlord'), createTenant);

router
  .route('/:id')
  .put(protect, authorize('landlord'), updateTenant);

module.exports = router;