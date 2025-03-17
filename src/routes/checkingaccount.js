const express = require('express');
const router = express.Router();
const { createCheckingAccount, getCheckingAccount } = require('../controllers/checkingaccount.controller');

router.post('/', createCheckingAccount);
router.get('/', getCheckingAccount);

module.exports = router;
