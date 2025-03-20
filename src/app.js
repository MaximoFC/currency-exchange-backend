const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT);

app.use(cors());
app.use(express.json());

app.use('/businesses', require('./routes/business'));
app.use('/checkingaccounts', require('./routes/checkingaccount'));
app.use('/clients', require('./routes/client'));
app.use('/transactions', require('./routes/transaction'));

module.exports = app;