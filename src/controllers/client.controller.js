const Client = require('../models/Client');

const createClient = async (req, res) => {
    let { date, id, name, cell } = req.body;

    date = date || new Date();

    try {
        const newClient = Client.createClient(date, id, name, cell);
        res.status(201).json(newClient);
    } catch (error) {
        console.error('Error creating client: ', error.message);
        res.status(500).json({error: 'Error creating client.'});
    }
};

const getClients = async (req, res) => {
    try {
        const clients = await Client.getClients();
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error fetching clients: ', error.message);
        res.status(500).json({error: 'Error fetching clients.'});
    }
};

module.exports = { createClient, getClients };