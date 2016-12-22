'use strict'
// Storage for local variables: typically (API Keys)
require('dotenv').config({ silent: true });
// Requires the express library
const express = require('express');
// Logger that sends inputs (erros: 200, 304, 404, 500, etc) to the terminal
const logger = require('morgan');
// Gets the public folder (CSS/HTML)
const path = require('path');
const bodyParser = require('body-parser');

// Invoking the express library
const app = express();
// Localhost 3000 || other ports stated
const PORT = process.argv[2] || process.env.port || 3000;

// The express library uses the morgan dependency and outputs default data to the terminal
app.use(logger('dev'));
// Parse application/json
app.use(bodyParser.json());
// Generate the Path to the folder indicated in the ' ', after __dirname
app.user(express.static(path.join(__dirname, 'dist')));

app.user('/api', require ('./routes/movies'));

app.listen(PORT, () => console.log('Yup, server is listening', PORT));
