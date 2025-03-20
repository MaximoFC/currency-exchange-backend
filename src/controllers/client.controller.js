const Client = require('../models/Client');
const CheckingAccount = require('../models/CheckingAccount');

const createClient = async (req, res) => {
    let { name, cell } = req.body;

    try {
        const newClient = await Client.createClient(name, cell);
        await CheckingAccount.createCheckingAccount(0, 0, 0, newClient.id);
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