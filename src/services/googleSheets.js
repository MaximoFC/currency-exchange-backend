const { google } = require('googleapis');
const path = require('path');

const keyPath = path.join(__dirname, ('../../historial-de-transacciones-a6457aa81905.json'));

const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
});

const sheets = google.sheets({ version: 'v4', auth });
const drive = google.drive({ version: 'v3', auth });

module.exports = { sheets, drive };
