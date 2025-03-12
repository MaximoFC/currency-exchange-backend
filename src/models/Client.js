const pool = require('../database');

const createClient = async (date, id, name, cell) => {
    const result = await pool.query(
        'INSERT INTO client (date, id, name, cell) VALUES ($1, $2, $3, $4) RETURNING *',
        [date, id, name, cell]
    );
    return result.rows[0];
};

const getClients = async () => {
    const result = await pool.query('SELECT * FROM client');
    return result.rows;
};

module.exports = { createClient, getClients };
