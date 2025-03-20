const pool = require('../database');

const createClient = async (name, cell) => {
    const result = await pool.query(
        'INSERT INTO client (name, cell) VALUES ($1, $2) RETURNING *',
        [name, cell]
    );
    return result.rows[0];
};

const getClients = async () => {
    const result = await pool.query('SELECT * FROM client');
    return result.rows;
};

module.exports = { createClient, getClients };
