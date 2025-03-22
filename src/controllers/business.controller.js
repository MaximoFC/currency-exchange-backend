const Business = require('../models/Business');

const createBusiness = async (req, res) => {
    const { ars, usd, eur } = req.body;
    try {
        const newBusiness = await Business.createBusiness(ars, usd, eur);
        res.status(201).json(newBusiness);
    } catch (error){
        console.error('Error creating business: ', error.message);
        res.status(500).json({error: 'Error creating business'});
    }
};

const getBusinesses = async (req, res) => {
    try {
        const business = await Business.getBusiness();
        if (!business) {
            return res.status(404).json({ error: "No business found" });
        }
        res.status(200).json(business);
    } catch (error) {
        console.error('Error getting businesses: ', error.message);
        res.status(500).json({ error: 'Error fetching businesses.' });
    }
};


const updateBusinessAmount = async (req, res) => {
    const { currency, amount } = req.body;

    if(!["ars", "usd", "eur"].includes(currency)) {
        return res.status(400).json({error: "Invalid currency"});
    }

    try {
        const updatedBusiness = await Business.updateBusinessAmount(currency, amount);
        res.status(200).json(updatedBusiness);
    } catch (error) {
        console.error("Error updating business amount: ", error.message);
        res.status(500).json({error: "Error updating business amount"});
    }
};

module.exports = { createBusiness, getBusinesses, updateBusinessAmount };