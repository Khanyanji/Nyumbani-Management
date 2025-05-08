// routes/tenantRoutes.js
const router = require('express').Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createTenant,
  getTenantsByProperty,
  updateTenant
} = require('../controllers/tenantController');

router.post('/', protect, authorize('landlord'), createTenant);
router.get('/property/:propertyId', protect, getTenantsByProperty);
router.put('/:id', protect, authorize('landlord'), updateTenant);

module.exports = router;