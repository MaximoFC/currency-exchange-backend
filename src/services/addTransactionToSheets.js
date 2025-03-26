const { sheets } = require('./googleSheets');
const { getClientNameById } = require('../models/Client');

const spreadsheetId = '1M2Ww7IZaKx6cj3jukyeyJZSlc8WhdVPjVdsqyETXrq4';

async function addTransactionToSheet(transaction) {
    const clientName = await getClientNameById(transaction.id_client);
    const range = 'Hoja 1!A2:G1000';

    const values = [
        [
            transaction.id,
            transaction.type,
            transaction.date,
            transaction.fromcurrency,
            transaction.tocurrency,
            transaction.amount,
            transaction.price,
            clientName,
        ],
    ];

    const resource = {
        values,
    };

    try {
        const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource,
    });
    
    } catch (error) {
        console.error('Error al agregar transacción:', error.message);
    }
}

module.exports = { addTransactionToSheet };
