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
    return result.rows;
}

module.exports = { createBusiness, getBusiness };