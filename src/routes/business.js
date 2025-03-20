const express = require('express');
const router = express.Router();
const { createBusiness, getBusinesses, updateBusinessAmount } = require('../controllers/business.controller');

router.post('/', createBusiness);
router.get('/', getBusinesses);
router.put('/update', updateBusinessAmount);

module.exports = router;