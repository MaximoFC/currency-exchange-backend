const pool = require('../database');

const createCheckingAccount = async (ARS, USD, EUR, id_client) => {
    const result = await pool.query(
    'INSERT INTO checking_account (ARS, USD, EUR, id_client) VALUES ($1, $2, $3, $4) RETURNING *',
    [ARS, USD, EUR, id_client]
    );
    return result.rows[0];
};

const getCheckingAccounts = async () => {
    const result = await pool.query('SELECT * FROM checking_account');
    return result.rows;
};

module.exports = { createCheckingAccount, getCheckingAccounts };
