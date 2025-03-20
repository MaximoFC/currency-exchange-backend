const pool = require('../database');

const createBusiness = async (ARS, USD, EUR) => {
    const result = await pool.query(
        'INSERT INTO business (ARS, USD, EUR) VALUES ($1, $2, $3) RETURNING *',
        [ARS, USD, EUR]
    );
    return result.rows[0];
};

const getBusiness = async () => {
    const result = await pool.query('SELECT * FROM business');
    return result.rows[0];
};

const updateBusinessAmount = async (currency, amount) => {
    const result = await pool.query(
        `UPDATE business SET ${currency} = ${currency} + $1 RETURNING *`,
        [amount]
    );
    return result.rows[0];
};

module.exports = { createBusiness, getBusiness };