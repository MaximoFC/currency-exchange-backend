const express = require('express');
const router = express.Router();
const { createBusiness, getBusinesses, updateManualBusinessAmount } = require('../controllers/business.controller');

router.post('/', createBusiness);
router.get('/', getBusinesses);
router.put('/update', updateManualBusinessAmount);

module.exports = router;