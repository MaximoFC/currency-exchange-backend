const pool = require('../database');
const format = require('pg-format')

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

const updateManualBusinessAmount = async (currency, amount) => {
    const column = currency.toLowerCase();
    const result = await pool.query(
        `UPDATE business SET ${column} = ${column} + $1 WHERE id = 1 RETURNING *`,
        [amount]
    );
    return result.rows[0];
};

const updateBusinessAmount = async (currency, amount) => {
    const validCurrencies = ["ars", "usd", "eur"];
    
    if (!validCurrencies.includes(currency)) {
        throw new Error("Invalid currency provided");
    }

    const query = `UPDATE business SET ${currency} = ${currency} + $1 WHERE id = 1 RETURNING *`;

    try {
        const result = await pool.query(query, [amount]); 
        return result.rows[0];
    } catch (error) {
        console.error("SQL Error:", error);
        throw new Error("Database error");
    }
};


module.exports = { createBusiness, getBusiness, updateManualBusinessAmount, updateBusinessAmount };