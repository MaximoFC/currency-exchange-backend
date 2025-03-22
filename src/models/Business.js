const pool = require('../database');

const createBusiness = async (ars, usd, eur) => {
    const result = await pool.query(
        'INSERT INTO business (ars, usd, eur) VALUES ($1, $2, $3) RETURNING *',
        [ars, usd, eur]
    );
    return result.rows[0];
};

const getBusiness = async () => {
    const result = await pool.query('SELECT * FROM business');
    return result.rows.length > 0 ? result.rows[0] : null;
};

const updateBusinessAmount = async (currency, amount) => {
    const result = await pool.query(
        `UPDATE business SET ${currency} = ${currency} + $1 WHERE id = 1 RETURNING *`,
        [amount]
    );
    return result.rows[0];
};

module.exports = { createBusiness, getBusiness, updateBusinessAmount };