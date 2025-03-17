const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT);

app.use(cors());
app.use(express.json());

app.use('/business', require('./routes/business'));
app.use('/checkingaccount', require('./routes/checkingaccount'));
app.use('/client', require('./routes/client'));
app.use('/transaction', require('./routes/transaction'));

module.exports = app;