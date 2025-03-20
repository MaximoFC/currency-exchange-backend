const CheckingAccount = require('../models/CheckingAccount');

const createCheckingAccount = async (req, res) => {
    const { ARS, USD, EUR } = req.body;
    try {
        const newCheckingAccount = await CheckingAccount.createCheckingAccount(ARS, USD, EUR);
        res.status(201).json(newCheckingAccount);
    } catch (error) {
        console.error('Error creating checking account: ', error.message);
        res.status(500).json({error: 'Error creating checking account.'});
    }
};

const getCheckingAccount = async (req, res) => {
    try {
        const checkingAccounts = await CheckingAccount.getCheckingAccounts();
        res.status(200).json(checkingAccounts);
    } catch (error) {
        console.error('Error fetching checking accounts: ', error.message);
        res.status(500).json({error: 'Error fetching checking accounts.'});
    }
}

module.exports = { createCheckingAccount, getCheckingAccount }