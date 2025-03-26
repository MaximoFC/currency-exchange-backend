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

const getClientNameById = async (id) => {
    const result = await pool.query('SELECT name FROM client WHERE id = $1', [id]);
    return result.rows[0] ? result.rows[0].name : 'Cliente desconocido';
};


module.exports = { createClient, getClients, getClientNameById };
