const express = require('express');
const router = express.Router();
const { createTransaction, getTransactions } = require('../controllers/transaction.controller');

router.post('/', createTransaction);
router.get('/', getTransactions);

module.exports = router;
