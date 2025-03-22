const Transaction = require('../models/Transaction');
const Business = require('../models/Business');

const createTransaction = async (req, res) => {
    let { date, id, fromCurrency, toCurrency, amount, id_checkingaccount } = req.body;

    date = date || new Date();

    if (!["ars", "usd", "eur"].includes(fromCurrency) || !["ars", "usd", "eur"].includes(toCurrency)) {
        return res.status(400).json({ error: "Invalid currency" });
    }

    try {
        const business = await Business.getBusiness();
        
        if (!business) {
            return res.status(404).json({ error: "No business found" });
        }

        if (business[fromCurrency] < amount) {
            return res.status(400).json({ error: "Insufficient funds" });
        }

        const newTransaction = await Transaction.createTransaction(date, id, fromCurrency, toCurrency, amount, id_checkingaccount);

        await Business.updateBusinessAmount(fromCurrency, -amount);
        await Business.updateBusinessAmount(toCurrency, amount);

        res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error creating transaction: ', error.message);
        res.status(500).json({ error: 'Error creating transaction' });
    }
};

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.getTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions: ', error.message);
        res.status(500).json({ error: 'Error fetching transactions' });
    }
};

module.exports = { createTransaction, getTransactions };
