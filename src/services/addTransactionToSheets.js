const { sheets } = require('./googleSheets');
const { getClientNameById } = require('../models/Client');

const spreadsheetId = '1M2Ww7IZaKx6cj3jukyeyJZSlc8WhdVPjVdsqyETXrq4';

async function addTransactionToSheet(transaction) {
    const clientName = await getClientNameById(transaction.id_client);
    const range = 'Hoja 1!A2:G1000';

    const translatedType = transaction.type === "buy" ? "Compra" : "Venta";

    const fromCurrency = transaction.fromcurrency.toUpperCase();
    const toCurrency = transaction.tocurrency.toUpperCase();

    const date = new Date(transaction.date);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${
        (date.getMonth() + 1).toString().padStart(2, "0")
    }/${date.getFullYear()} ${date.getHours().toString().padStart(2, "0")}:${
        date.getMinutes().toString().padStart(2, "0")
    }`;

    const values = [
        [
            transaction.id,
            translatedType,
            formattedDate,
            fromCurrency,
            toCurrency,
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
