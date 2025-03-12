const pool = require('../database');

const createTransaction = async (date, id, currency, amount, id_checkingaccount) => {
    const result = await pool.query(
        'INSERT INTO transaction (date, id, currency, amount, id_checkingaccount) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [date, id, currency, amount, id_checkingaccount]
    );
    return result.rows[0];
};

const getTransactions = async () => {
    const result = await pool.query('SELECT * FROM transaction');
    return result.rows;
};

module.exports = { createTransaction, getTransactions };
