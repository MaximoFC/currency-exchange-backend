const pool = require('../database');

const createTransaction = async (type, date, fromCurrency, toCurrency, amount, price, id_client) => {
    const result = await pool.query(
        'INSERT INTO transaction (type, date, fromcurrency, tocurrency, amount, price, id_client) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [type, date, fromCurrency, toCurrency, amount, price, id_client]
    );
    return result.rows[0];
};

const getTransactions = async () => {
    const result = await pool.query('SELECT * FROM transaction');
    return result.rows;
};

module.exports = { createTransaction, getTransactions };