const Transaction = require('../models/Transaction');

const createTransaction = async (req, res) => {
    let { date, id, currency, amount, id_checkingaccount } = req.body;

    date = date || new Date();

    try {
        const newTransaction = await Transaction.createTransaction(date, id, currency, amount, id_checkingaccount);
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error creating transaction: ', error.message);
        res.status(500).json({error: 'Error creating transaction'});
    }
};

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.getTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions: ', error.message);
        res.status(500).json({error: 'Error fetching transactions'});
    }
};

module.exports = { createTransaction, getTransactions };