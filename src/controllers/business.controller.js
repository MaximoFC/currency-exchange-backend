const Business = require('../models/Business');

const createBusiness = async (req, res) => {
    const { ARS, USD, EUR } = req.body;
    try {
        const newBusiness = await Business.createBusiness(ARS, USD, EUR);
        res.status(201).json(newBusiness);
    } catch (error){
        console.error('Error creating business: ', error.message);
        res.status(500).json({error: 'Error creating business'});
    }
};

const getBusinesses = async (req, res) => {
    try {
        const businesses = await Business.getBusiness();
        res.status(200).json(businesses);
    } catch (error) {
        console.error('Error getting businesses: ', error.message);
        res.status(500).json({error: 'Error fetching businesses.'});
    }
};

module.exports = { createBusiness, getBusinesses };