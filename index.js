const express = require('express');
const bodyParser = require('body-parser');
const ussd = require('./ussd');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.status(200).json({ message: 'ok' }));
app.post('/ussd', ussd);

app.listen(port, () => console.log('app listening on port', port + '....'));
