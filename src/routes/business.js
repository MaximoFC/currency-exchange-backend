const express = require('express');
const router = express.Router();
const { createBusiness, getBusinesses } = require('../controllers/business.controller');

router.post('/', createBusiness);
router.get('/', getBusinesses);

module.exports = router;